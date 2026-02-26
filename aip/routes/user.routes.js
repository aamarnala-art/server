const { Router } = require("express");
const { createUser, login } = require("../controllers/user.controller");



const USER_ROTER=Router();

USER_ROTER.post("/createUser",createUser);

USER_ROTER.post("/login",login);



module.exports=USER_ROTER;
