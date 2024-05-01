const {signUpController,loginController} = require("../controller/authController.js");
const express = require('express');
const Router = express.Router();
Router.post("/signup",signUpController);
Router.post("/login", loginController);
const requireUser = require('../MiddleWare/require.js');



module.exports = Router;
