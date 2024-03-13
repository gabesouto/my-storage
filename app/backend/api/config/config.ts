
import { configDotenv } from 'dotenv';
import { Dialect, Options } from 'sequelize';

configDotenv();

const config: Options = {
  username: process.env.POSTGRES_USER || 'root',
  password: process.env.POSTGRES_PASSWORD || '123456',
  database: 'verceldb',
  host: process.env.POSTGRES_HOST,
  port: Number(process.env.DB_PORT) || 5432,
  dialect: process.env.DIALECT_ENV  as Dialect,
  logging: false,
  dialectOptions: {
      ssl: {
        require: true, 
        rejectUnauthorized: false
      }
    }
};

module.exports = config