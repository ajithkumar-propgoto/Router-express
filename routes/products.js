var express = require("express");

var router = express.Router();

// /products

router.get("/", (req,res) => {
    res.send("get request for products")
})

// /products/get-produts/detail

router.get("/get-products-details", (req,res) => {
    res.send("get-request for product details")
})

module.exports= router;