"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = __importDefault(require("."));
class SequelizeUser extends sequelize_1.Model {
}
exports.default = SequelizeUser;
SequelizeUser.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    email: {
        type: sequelize_1.DataTypes.STRING(30),
        allowNull: false
    },
    username: {
        type: sequelize_1.DataTypes.STRING(30),
        allowNull: false
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
}, { sequelize: _1.default, modelName: 'user', timestamps: false });
//# sourceMappingURL=user.model.js.map