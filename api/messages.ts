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

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    let messages: any[] = [];
    let usingDatabase = false;

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

        // Fetch all messages ordered by newest first
        const result = await sql`
          SELECT * FROM messages 
          ORDER BY createdAt DESC
        `;

        messages = Array.isArray(result) ? result : [];
        usingDatabase = true;
        console.log(`✓ Fetched ${messages.length} messages from Neon DB`);
      } catch (dbError) {
        console.error('Neon database error:', dbError);
        // Fall through to memory storage
      }
    } else {
      console.warn('⚠ POSTGRES_URL not set - using memory storage');
    }

    // Fallback to memory storage if database isn't available
    if (!usingDatabase) {
      messages = [...messagesStore].sort((a, b) => 
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
      console.log(`✓ Returning ${messages.length} messages from memory`);
    }

    return res.status(200).json(messages);
  } catch (error) {
    console.error('Error in /api/messages:', error);
    return res.status(500).json({ 
      error: 'Failed to fetch messages', 
      details: error instanceof Error ? error.message : String(error) 
    });
  }
}
