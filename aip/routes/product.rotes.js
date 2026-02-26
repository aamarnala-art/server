const { createproduct, getAllProducts } = require("../controllers/produt.controller");

const {Router}=require ("express");

const PRODUCT_ROTER=Router();

PRODUCT_ROTER.post("/createproduct", createproduct);
PRODUCT_ROTER.post("/getAllProducts", getAllProducts)

module.exports=PRODUCT_ROTER;