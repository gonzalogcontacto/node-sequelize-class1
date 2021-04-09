import express from 'express';
import { OrderProducts, User } from './models/index.js';
import { Order } from './models/index.js';
import { Product } from './models/index.js';

import database from './database.js';
import { Sequelize } from 'sequelize';

const app = express();

app.get('/users', async (req, res) => {
    
    try {
        const rawResults = await database.query('SELECT * FROM Users', {type: Sequelize.QueryTypes.SELECT});

        const users = await User.findByPk(1)
        
        const orderProducts = await OrderProducts.findAll({
        
            include: [
                { 
                    model: Product,
                    attributes: ['name', 'price']
                },
                { 
                    model: Order
                }

            ]
        });
        const orders = await Order.findAll({
            include: [
                {
                    model: User
                },
                {
                    model: Product
                }
            ] 
        })

        res.json({users,orders, rawResults, orderProducts});

    } catch (err) {
        console.log(err)
    }
});

app.listen(3000, () => {
    console.log('App running');
})