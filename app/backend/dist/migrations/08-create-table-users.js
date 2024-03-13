"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.default = {
    up(queryInterface) {
        return queryInterface.createTable('users', {
            id: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            email: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
                field: 'email'
            },
            username: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
                field: 'username'
            },
            password: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
                field: 'password'
            },
        });
    },
    down(queryInterface) {
        return queryInterface.dropTable('users');
    },
};
//# sourceMappingURL=08-create-table-users.js.map