import express from "express";
import mongoose from "mongoose";

mongoose
.connect(
    'mongodb+srv://firsaavln:firsa@cluster0.f45t3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
)
.then(() => {
    console.log('MongoDB is Connected')
})

.catch((err) => {
    console.log(err)
})

const app = express();
 
app.listen(3000, ()=> {

console.log("Server is running on port 3000 !!!");

});