// Connect to the database
require('dotenv').config();
require('./config/database');

// Require the Mongoose models
const User = require('./models/user');
const Drink = require('./models/drink');

// Local variables will come in handy for holding retrieved documents
let user, drink;
let users, drinks;