import { execSync } from 'child_process';
import { query, close } from './db.js';
import dotenv from 'dotenv';
dotenv.config();

export async function seed() {
  // Try to run seed locally via psql, if psql is installed
  try {
    execSync(`psql -h ${process.env.PGHOST} -p ${process.env.PGPORT} -U ${process.env.PGUSER} -d ${process.env.PGDATABASE} -f seed.sql`, { stdio: 'inherit', env: {...process.env, PGPASSWORD: process.env.PGPASSWORD }});
  } catch (e) {
    // If failed, user can do npm run seed:docker
    console.warn('Local psql seed failed — run `npm run seed:docker` or ensure psql installed.');
  }
}

export async function truncateAll() {
  await query('TRUNCATE TABLE orders, users RESTART IDENTITY;');
}

export { query, close as closePool };
