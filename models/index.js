import { User } from "./user.js";
import { Order } from "./order.js";
import { Product } from "./product.js";
import { OrderProducts } from "./orderproducts.js";

// associations can be defined here
Order.hasOne(User, { foreignKey: 'id' });
Order.belongsToMany(Product, { through: OrderProducts });

OrderProducts.belongsTo(Product, { foreignKey: 'productId'});
OrderProducts.hasOne(Order, {foreignKey: 'id'});

User.hasMany(Order, {foreignKey: 'userId'});

export { Order, User, Product, OrderProducts }