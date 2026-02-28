import type { VercelRequest, VercelResponse } from '@vercel/node';
import { neon } from '@neondatabase/serverless';

export const config = {
  runtime: 'nodejs18.x',
};

const getConnectionString = () => process.env.POSTGRES_URL || process.env.DATABASE_URL;

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

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const connectionString = getConnectionString();
    if (!connectionString) {
      return res.status(500).json({
        error: 'Database is not configured',
        details: 'Set POSTGRES_URL or DATABASE_URL in Vercel Environment Variables for this environment.',
      });
    }

    const sql = neon(connectionString);

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

    const result = await sql`
      SELECT * FROM messages 
      ORDER BY createdAt DESC
    `;

    const messages = Array.isArray(result) ? result : [];
    console.log(`✓ Fetched ${messages.length} messages from Neon DB`);

    return res.status(200).json(messages);
  } catch (error) {
    console.error('Error in /api/messages:', error);
    return res.status(500).json({ 
      error: 'Failed to fetch messages', 
      details: error instanceof Error ? error.message : String(error) 
    });
  }
}
