import { Pool } from 'pg';

// PostgreSQL 데이터베이스 연결 설정
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'mydatabase',
  password: 'password',
  port: 5432,
});

export default pool;