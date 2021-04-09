
  import pkg from 'sequelize';
  import database  from "../database.js";  
  const { Model, DataTypes } = pkg;
  
  export class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Product.init({
    name: DataTypes.STRING,
    price: DataTypes.NUMERIC
  }, {
    sequelize: database,
    modelName: 'Product',
  });
