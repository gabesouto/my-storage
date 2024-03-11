const config = require("../config/config")
import { Sequelize } from "sequelize"

const sequelize = new Sequelize(config)
export default sequelize