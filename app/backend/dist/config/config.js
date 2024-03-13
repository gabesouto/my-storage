"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
(0, dotenv_1.configDotenv)();
const config = {
    username: process.env.POSTGRES_USER || 'root',
    password: process.env.POSTGRES_PASSWORD || '123456',
    database: 'verceldb',
    host: process.env.POSTGRES_HOST,
    port: Number(process.env.DB_PORT) || 5432,
    dialect: process.env.DIALECT_ENV,
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