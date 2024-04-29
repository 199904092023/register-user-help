const authController = require("../controller/authController.js");
const express = require('express');
const Router = express.Router();
Router.post("/signup", authController.signupcontroller);
Router.post("/login", authController.loginController);
const requireUser = require('../MiddleWare/require.js');



module.exports = Router;
