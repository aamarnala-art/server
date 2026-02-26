const { Schema, model } = require("mongoose")

const PRODUCT_SCHEAM = new Schema({
    image: String,
    name : String,
    price:String,
   category:String,
    color: String,
     size:String,
}
)

const PRODUCT_MODEL = model("product", PRODUCT_SCHEAM);
module.exports = PRODUCT_MODEL;