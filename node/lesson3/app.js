const express = require('express');
const users = require('./dataBase/users');

const app = express();

app.get('/users', (req, res) => {
    console.log(req);

    res.json(users);
});
app.post('/users', (req, res) => {
    console.log(req);

    res.json('Hello Test friend');
});
app.get('/users/:userId', (req, res) => {
    try {
        console.log(req.params);

        const {userId} = req.params;

        const user = users[userId-1];

        if(!user){
            res.status(404).json('User not found');
            return;
        }
        res.json(user);
    } catch (e) {
        res.status(400).json(e);
    }
});
app.put('/users/:userId', (req, res) => {
    console.log(req);

    res.json('Hello Test friend');
});
app.delete('/users/:userId', (req, res) => {
    console.log(req);

    res.json('Hello Test friend');
});

app.listen(5000, () =>{
    console.log('Listen 5000')
});