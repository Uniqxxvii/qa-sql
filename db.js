import pg from 'pg';
import dotenv from 'dotenv';
dotenv.config();

const pool = new pg.Pool({
  host: process.env.PGHOST || 'localhost',
  port: process.env.PGPORT ? Number(process.env.PGPORT) : 5432,
  database: process.env.PGDATABASE || 'qa_db',
  user: process.env.PGUSER || 'qa_user',
  password: process.env.PGPASSWORD || 'pass'
});

export default pool;
export const query = (text, params) => pool.query(text, params);
export const close = () => pool.end();
