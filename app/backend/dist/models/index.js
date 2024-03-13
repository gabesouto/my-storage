"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = require("../config/config");
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize(config);
exports.default = sequelize;
//# sourceMappingURL=index.js.map