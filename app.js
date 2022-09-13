const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-routes.js");
const cors = require("cors");
const app = express();

const PORT=process.env.PORT ||5000;
// Middlewares
app.use(express.json());
app.use(cors());
app.use("/books", router); // localhost:5000/books

if(process.env.NODE_ENV=="production"){
  app.use(express.static("frontend/build"));
  const path=require("path")
   app.get('*',(req,res)=>{
      res.sendFile(path.resolve(__dirname,"frontend" , "build" , "index.html"))
   })
}

mongoose
  .connect(
    "mongodb+srv://admin:admin@cluster0.nkcrldn.mongodb.net/bookStore?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected To Database"))
  .then(() => {
    app.listen(PORT);
  })
  .catch((err) => console.log(err));