const express= require('express');
var products = require('./routes/products');
const data = require("./source")
var user = require("./routes/users")
const app =  express();


app.use("/products", products)
app.use('/user',user)


app.listen(5000,() => {
    console.log("server started");
})