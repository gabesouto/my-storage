"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
const pg_1 = __importDefault(require("pg"));
(0, dotenv_1.configDotenv)();
const config = {
    username: process.env.POSTGRES_USER || 'root',
    password: process.env.POSTGRES_PASSWORD || '123456',
    database: 'verceldb',
    host: process.env.POSTGRES_HOST,
    port: Number(process.env.DB_PORT) || 5432,
    dialect: process.env.DIALECT_ENV,
    dialectModule: pg_1.default,
    logging: false,
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
};
module.exports = config;
//# sourceMappingURL=config.js.map