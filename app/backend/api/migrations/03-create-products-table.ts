
import { Model, QueryInterface, DataTypes } from 'sequelize';
export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model>('products', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'name'
      },
      brand: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'brand'
      },
      color: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'color'
      },
      price: {
		type: DataTypes.DECIMAL,
        allowNull: false,
        field: 'price'
      },
      model: {
		type: DataTypes.STRING,
        allowNull: false,
        field: 'model'
      },


    });
  },
  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('products');
  },
};