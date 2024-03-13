"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
require("dotenv/config");
const sequelize = new sequelize_1.Sequelize(process.env.POSTGRES_URL || '');
exports.default = sequelize;
//# sourceMappingURL=database.js.map