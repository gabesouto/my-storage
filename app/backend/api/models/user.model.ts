import { Model, CreationOptional, DataTypes, InferAttributes, InferCreationAttributes } from 'sequelize';
import sequelize from '.';

export default class SequelizeUser extends Model<InferAttributes<SequelizeUser>,
 InferCreationAttributes<SequelizeUser>>{

  declare id: CreationOptional<number>;
  declare email: string;
  declare password: string;
  declare username: string
 }
SequelizeUser.init({
	id: {
		type: DataTypes.INTEGER,
		allowNull: false,
		primaryKey: true,
		autoIncrement: true
	},
	email: {
		type: DataTypes.STRING(30),
		allowNull: false
	},
	username: {
		type: DataTypes.STRING(30),
		allowNull: false
	},
	password: {
		type: DataTypes.STRING,
		allowNull: false
	},


}, { sequelize, modelName: 'user', timestamps: false });

