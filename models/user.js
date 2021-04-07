'use strict';
import pkg from 'sequelize';
import database  from "../database.js";

const { Model, DataTypes } = pkg;

export class User extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models) {
    // define association here
  }
};

User.init({
  name: DataTypes.STRING,
  email: DataTypes.STRING
}, {
  modelName: "User",
  sequelize: database,
});

