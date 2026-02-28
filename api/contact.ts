import type { VercelRequest, VercelResponse } from '@vercel/node';
import postgres from 'postgres';

export const config = {
  runtime: 'nodejs18.x',
};

const getConnectionString = () => process.env.DATABASE_URL || process.env.POSTGRES_URL;

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { fullName, companyName, workEmail, phoneNumber, industry, lookingFor, message } = req.body;

  // Validate inputs
  if (!fullName || !workEmail || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    const connectionString = getConnectionString();
    if (!connectionString) {
      return res.status(500).json({
        error: 'Database is not configured',
        details: 'Set POSTGRES_URL or DATABASE_URL in Vercel Environment Variables for this environment.',
      });
    }

    const sql = postgres(connectionString, { ssl: 'verify-full' });

    await sql`
      CREATE TABLE IF NOT EXISTS messages (
        id SERIAL PRIMARY KEY,
        fullname TEXT NOT NULL,
        companyname TEXT,
        workemail TEXT NOT NULL,
        phonenumber TEXT,
        industry TEXT,
        lookingfor TEXT,
        message TEXT NOT NULL,
        createdat TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;

    await sql`
      INSERT INTO messages (fullname, companyname, workemail, phonenumber, industry, lookingfor, message)
      VALUES (${fullName}, ${companyName}, ${workEmail}, ${phoneNumber}, ${industry}, ${lookingFor}, ${message})
    `;

    await sql.end({ timeout: 5 });

    console.log(`✓ Message saved to Neon DB: ${fullName} (${workEmail})`);

    return res.status(200).json({ 
      success: true, 
      storage: 'neon-database' 
    });
  } catch (error) {
    console.error('Error in /api/contact:', error);
    return res.status(500).json({ 
      error: 'Failed to save message', 
      details: error instanceof Error ? error.message : String(error) 
    });
  }
}
