import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  dialect: 'postgresql',
  schema: './Models/Database/Schema.js',
  out: './drizzle',
  dbCredentials: {
    url: process.env.DATABASE_URL,
  },
});
