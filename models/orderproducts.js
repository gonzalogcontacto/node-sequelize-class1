
  import pkg from 'sequelize';
  import database  from "../database.js";  
  const { Model, DataTypes } = pkg;
  
  export class OrderProducts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  OrderProducts.init({
    productId: DataTypes.INTEGER,
    orderId: DataTypes.INTEGER
  }, {
    sequelize: database,
    modelName: 'OrderProducts',
  });