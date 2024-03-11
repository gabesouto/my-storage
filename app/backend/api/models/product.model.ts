import { Model, CreationOptional, DataTypes, InferAttributes, InferCreationAttributes } from 'sequelize';
import sequelize from '.';

export default class SequelizeProduct extends Model<InferAttributes<SequelizeProduct>,
 InferCreationAttributes<SequelizeProduct>>{

  declare id: CreationOptional<number>;
  declare name: string;
  declare brand: string;
  declare model: string;
  declare price: number;
  declare color: string;
 }
SequelizeProduct.init({
	id: {
		type: DataTypes.INTEGER,
		allowNull: false,
		primaryKey: true,
		autoIncrement: true
	},
	name: {
		type: DataTypes.STRING(30),
		allowNull: false
	},
	brand: {
		type: DataTypes.STRING(30),
		allowNull: false
	},
	color: {
		type: DataTypes.STRING(30),
		allowNull: false
	},
	price: {
		type: DataTypes.DECIMAL,
		allowNull: false
	},
	model: {
		type: DataTypes.STRING,
		allowNull: false
	},


}, { sequelize, modelName: 'product', timestamps: false });

