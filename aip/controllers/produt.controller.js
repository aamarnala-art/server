const PRODUCT_MODEL = require("../modules/product.module");

const createproduct = (req, res) => {
    const {
    image,
    name,
    price,
   category,
    color,
     size,

    } = req.body;

    PRODUCT_MODEL.create({
    image,
    name,
    price,
   category,
    color,
     size:String,
    })
        .then((createRes) => {
            res.status(200).json(createRes);

        })
        .catch(e =>
            res.status(500).json({
                error: true,
                errorMessage: e,
            }
            ))

}

const getAllProducts = (req, res) => {
    PRODUCT_MODEL.find().then((allproducts) => {
        res.status(200).json({
            response: allproducts,
        });
    }
    )
}

const getAllProductsByType = (req, res) => {
    const {
        type
    } = req.body;


    PRODUCT_MODEL.find({type : type}).then(getAllProductsByType => {
        res.status(200).json({
            response: getAllProductsByType,
        });
    }
    )
}


module.exports = {
    createproduct,
    getAllProducts,

};






