"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.default = {
    up(queryInterface) {
        return queryInterface.createTable('products', {
            id: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            name: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
                field: 'name'
            },
            brand: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
                field: 'brand'
            },
            color: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
                field: 'color'
            },
            price: {
                type: sequelize_1.DataTypes.DECIMAL,
                allowNull: false,
                field: 'price'
            },
            model: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
                field: 'model'
            },
        });
    },
    down(queryInterface) {
        return queryInterface.dropTable('products');
    },
};
//# sourceMappingURL=03-create-products-table.js.map