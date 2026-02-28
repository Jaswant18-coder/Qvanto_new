import type { VercelRequest, VercelResponse } from '@vercel/node';

export const config = {
  runtime: 'nodejs18.x',
};

// Fallback in-memory storage for testing
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

    try {
      const { sql } = await import('@vercel/postgres');
      
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

      // Fetch all messages ordered by newest first
      const result = await sql`
        SELECT * FROM messages 
        ORDER BY createdAt DESC
      `;
      
      messages = result.rows || [];
      usingDatabase = true;
    } catch (dbError) {
      console.log('Database unavailable, returning memory storage:', dbError);
      // Fallback to in-memory storage
      messages = [...messagesStore].sort((a, b) => 
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
    }

    console.log(`Returning ${messages.length} messages (${usingDatabase ? 'from DB' : 'from memory'})`);
    
    return res.status(200).json(messages);
  } catch (error) {
    console.error('Error fetching messages:', error);
    return res.status(500).json({ error: 'Failed to fetch messages', details: String(error) });
  }
}
