const express = require("express")
var cors = require("cors");
const mongoose = require("mongoose");
const Router = require("./aip/routes/Router");

const app = express();
app.use(express.json());
app.use(cors())
app.use('/', Router)

const mongoURL = "mongodb+srv://nala2014:nala2014@cluster0.iukrkcb.mongodb.net/"
mongoose.connect(mongoURL);

mongoose.connection.on("connected", () => {
    console.log("mongo connected");
}

)

mongoose.connection.on("error", (err) => {
    console.error("MongoDB connection erorr:", err)
}

)

app.get("/", (req, res) => {
    res.status(200).json({
        message: "server is live♥",
        color: "yellow"
    })
})


app.get("/main", (req, res) => {
    res.status(200).json({
        name: "nala",
        age: 11,

    });
});

app.post("/order", (req, res) => {
    const { order } = req.body;

    if (!order.amount) {
        return res.status(500).json({
            error: true,
            errorMessage: "amount is must",
        }
        )
    } // if 
    return res.status(500).json({
        name:order.name,
        price:"final price: "+order.amount*order.price
    })
})

app.get("/funetain", (req, res) => {
    res.status(200).json({
        name: "nala",


    });
});


module.exports = app
