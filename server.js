const express = require('express');
const sequelize = require('./config/connection');
const app = express();
const PORT = process.env.PORT || 3001;

const controllers = require('./controllers');
app.use(controllers);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

sequelize.sync().then(() => {
    app.listen(PORT, () => {
      console.log('We are Listening, We Are Legion');
    })
  });