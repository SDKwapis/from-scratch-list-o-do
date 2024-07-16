const express = require('express');
const sequelize = require('sequelize');
const app = express();
const PORT = process.env.PORT || 3001;

const controllers = require('./controllers');

app.use(controllers);

sequelize.sync().then(() => {
app.listen(PORT, () => {
    console.log('We are Listening, We Are Legion');
    })
});