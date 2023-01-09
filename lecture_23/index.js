const express = require("express");
const app = express();
const mongoose = require("mongoose");
const {createProduct,getAllProducts,deleteProduct,updateProduct} = require("./productsOperations")
app.use(express.json());



mongoose.set('strictQuery', true);
mongoose.connect("mongodb://0.0.0.0:27017/mernstack")
.then(async ()=>{
    console.log("Connection to MongoDB created");
    // let product = await createProduct("Dell",200,["funny","classy"]);
    // console.log(product); 
    // let allProducts = await getAllProducts();
    // console.log(allProducts);
    // console.log(await deleteProduct("63b22127c20d75dbc3b80055"))
    let updatedProduct = updateProduct("63b1ec42a4e9472d76f05c5a","Dell updated" , 250 , []);
}).catch((err)=>{
    console.log("Error Connecting");
    console.log(err);
});


app.listen(3000);