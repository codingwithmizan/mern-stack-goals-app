const express = require('express');
const cors = require('cors');
const {goalRoutes, userRoutes} = require('./routes');

//app initialization
const app = express();


//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//app routes
app.use('/api/goals', goalRoutes);
app.use('/api/users', userRoutes);


module.exports = app;