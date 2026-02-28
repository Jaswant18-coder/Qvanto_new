import type { VercelRequest, VercelResponse } from '@vercel/node';
import { sql } from '@vercel/postgres';

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

  try {
    // Create table if it doesn't exist
    await sql`
      CREATE TABLE IF NOT EXISTS messages (
        id SERIAL PRIMARY KEY,
        fullName TEXT,
        companyName TEXT,
        workEmail TEXT,
        phoneNumber TEXT,
        industry TEXT,
        lookingFor TEXT,
        message TEXT,
        createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;

    // Insert the message
    await sql`
      INSERT INTO messages (fullName, companyName, workEmail, phoneNumber, industry, lookingFor, message)
      VALUES (${fullName}, ${companyName}, ${workEmail}, ${phoneNumber}, ${industry}, ${lookingFor}, ${message})
    `;
    
    console.log('New message received:', { fullName, workEmail, companyName });
    
    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error saving message:', error);
    return res.status(500).json({ error: 'Failed to save message', details: String(error) });
  }
}
