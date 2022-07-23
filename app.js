const express = require('express');
const app = express();
//const debug = require('debug')('app');
const port = 3000;
const path = require('path');

app.use(express.static(path.join(__dirname,"/public/")))

app.set("views","./src/views");
app.set("view engine", "ejs")

app.get("/",(req,res) =>{

    res.render('index',{username: 'jackza555+',customers: ["Apiwanza","Apiwan1111","jack007"]});
})

app.listen(port,()=>{
    console.log("Listening on port %d",port);
})