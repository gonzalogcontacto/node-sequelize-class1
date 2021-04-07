import express from 'express';
import { User } from './models/user.js';

const app = express();

app.get('/users', async (req, res) => {
    
    try {
        const users = await User.findByPk(1)
        res.json(users);

    } catch (err) {
        console.log(err)
    }
});

app.listen(3000, () => {
    console.log('App running');
})