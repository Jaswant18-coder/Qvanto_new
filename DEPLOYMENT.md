# Deployment Instructions for Vercel

## Important: Database Setup for Admin Messages

The contact form messages need a database to persist data when deployed. Follow these steps:

### Option 1: Using Neon (Vercel's Recommended Database)

1. **Create a Neon Database** (Free Tier Available):
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Go to your project → Storage tab
   - Click "Create Database" → Select "Neon Serverless Postgres"
   - Follow the setup wizard

2. **Environment Variables** (Auto-configured by Vercel):
   - When you connect Neon, Vercel automatically sets:
     - `POSTGRES_URL`
     - `POSTGRES_PRISMA_URL`
     - `POSTGRES_URL_NON_POOLING`

3. **Deploy**:
   ```bash
   git push origin main
   ```
   Vercel will automatically detect and deploy your changes.

### Option 2: Skip Database (Messages Won't Persist)

If you just want to test the deployment without database:
- The current setup works but messages won't persist across function invocations
- Form submissions will appear in Vercel Function Logs
- Admin tab will show empty (no persistent storage)

## Local Development

The local development server uses SQLite (`messages.db`):

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build & Preview

```bash
npm run build
npm run preview
```

## Files Created for Deployment

- `api/contact.ts` - Serverless function to handle form submissions
- `api/messages.ts` - Serverless function to fetch messages
- `vercel.json` - Routes API calls to serverless functions
- `.gitattributes` - Normalizes line endings

## Troubleshooting

**Messages not showing in Admin:**
1. Check if database is connected in Vercel Dashboard → Storage
2. View Vercel Function Logs to see if messages are being received
3. Verify environment variables are set

**API errors:**
- Check Vercel Function Logs in your dashboard
- Ensure `@vercel/postgres` is in dependencies
- Verify database connection string is set

## Alternative: External Database

You can also use any PostgreSQL database:
1. Get a connection string from your provider (Neon, Supabase, Railway, etc.)
2. Add to Vercel project settings: Environment Variables
   - Key: `POSTGRES_URL`
   - Value: your connection string
3. Redeploy

## Support

For issues with Neon migration from deprecated @vercel/postgres:
- See: https://neon.com/docs/guides/vercel-postgres-transition-guide
