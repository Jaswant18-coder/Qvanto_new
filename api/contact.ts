import type { VercelRequest, VercelResponse } from '@vercel/node';
import { neon } from '@neondatabase/serverless';

export const config = {
  runtime: 'nodejs18.x',
};

// Fallback in-memory storage
let messagesStore: any[] = [];

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
    let useDatabase = false;

    // Try to use Neon database if connection string is available
    if (process.env.POSTGRES_URL) {
      try {
        const sql = neon(process.env.POSTGRES_URL);

        // Create table if it doesn't exist
        await sql`
          CREATE TABLE IF NOT EXISTS messages (
            id SERIAL PRIMARY KEY,
            fullName TEXT NOT NULL,
            companyName TEXT,
            workEmail TEXT NOT NULL,
            phoneNumber TEXT,
            industry TEXT,
            lookingFor TEXT,
            message TEXT NOT NULL,
            createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
          )
        `;

        // Insert the message
        await sql`
          INSERT INTO messages (fullName, companyName, workEmail, phoneNumber, industry, lookingFor, message)
          VALUES (${fullName}, ${companyName}, ${workEmail}, ${phoneNumber}, ${industry}, ${lookingFor}, ${message})
        `;

        useDatabase = true;
        console.log(`✓ Message saved to Neon DB: ${fullName} (${workEmail})`);
      } catch (dbError) {
        console.error('Neon database error:', dbError);
        // Fall through to memory storage
      }
    } else {
      console.warn('⚠ POSTGRES_URL not set - using memory storage');
    }

    // Fallback to memory storage if database isn't available
    if (!useDatabase) {
      messagesStore.push({
        id: messagesStore.length + 1,
        fullName,
        companyName,
        workEmail,
        phoneNumber,
        industry,
        lookingFor,
        message,
        createdAt: new Date().toISOString(),
      });
      console.log(`✓ Message saved to memory: ${fullName} (${workEmail})`);
    }

    return res.status(200).json({ 
      success: true, 
      storage: useDatabase ? 'neon-database' : 'memory' 
    });
  } catch (error) {
    console.error('Error in /api/contact:', error);
    return res.status(500).json({ 
      error: 'Failed to save message', 
      details: error instanceof Error ? error.message : String(error) 
    });
  }
}
