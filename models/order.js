import pkg from 'sequelize';
import database  from "../database.js";
import { OrderProducts } from './orderproducts.js';
import { Product } from './product.js';
import { User } from './index.js';

const { Model, DataTypes } = pkg;

export class Order extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate() {
    // define association here
  }
  
};

Order.init({
  userId: {
    type: DataTypes.INTEGER
  },
  total: DataTypes.NUMERIC,
  createdAt: {
    type: new DataTypes.DATE,
    allowNull: false,
    defaultValue: pkg.literal('CURRENT_TIMESTAMP')
  },
  updatedAt: {
    type: new DataTypes.DATE,
    allowNull: false,
    defaultValue: pkg.literal('CURRENT_TIMESTAMP')
  }
}, {
  sequelize: database,
  modelName: 'Order',
});


