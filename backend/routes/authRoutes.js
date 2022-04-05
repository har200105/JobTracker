const express = require('express');
const route = express.Router();


const { register, login, updateUser } = require('../controllers/authControllers');
const authenticateUser = require('../middleware/auth');
route.post('/register', register);
route.post('/login', login);
route.patch('/updateUser',authenticateUser,updateUser);

module.exports = route;
