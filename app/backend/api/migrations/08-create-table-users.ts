
import { Model, QueryInterface, DataTypes } from 'sequelize';
export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model>('users', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'email'
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'username'
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'password'
      },

    });
  },
  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('users');
  },
};