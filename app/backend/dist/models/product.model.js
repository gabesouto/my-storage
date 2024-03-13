"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = __importDefault(require("."));
class SequelizeProduct extends sequelize_1.Model {
}
exports.default = SequelizeProduct;
SequelizeProduct.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: sequelize_1.DataTypes.STRING(30),
        allowNull: false
    },
    brand: {
        type: sequelize_1.DataTypes.STRING(30),
        allowNull: false
    },
    color: {
        type: sequelize_1.DataTypes.STRING(30),
        allowNull: false
    },
    price: {
        type: sequelize_1.DataTypes.DECIMAL,
        allowNull: false
    },
    model: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
}, { sequelize: _1.default, modelName: 'product', timestamps: false });
//# sourceMappingURL=product.model.js.map