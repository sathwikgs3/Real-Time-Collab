import { defineConfig } from 'drizzle-kit';
import * as dotenv from 'dotenv';

dotenv.config({path : '.env'});

if(!process.env.DATABASE_URL){
    console.log('Cannot find database url');
}

export default defineConfig({
 schema: "./src/lib/supabase/schema.ts",
  dialect: 'postgresql',
  out: './migrations',
  dbCredentials: {
    url: process.env.DATABASE_URL || "",
    port: 5432,
    database: 'postgres',
    host: "aws-0-ap-southeast-1.pooler.supabase.com",
    user: "postgres.pzegoftfpwasgfopkymt",
    password: process.env.PW || "",
  },
  verbose: true,
  strict: true,
})

