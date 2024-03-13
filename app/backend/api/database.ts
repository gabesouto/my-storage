import { Sequelize } from 'sequelize';
import { VercelPool } from '@vercel/postgres';
import 'dotenv/config';

const sequelize = new Sequelize(process.env.POSTGRES_URL || '');

export default sequelize;
