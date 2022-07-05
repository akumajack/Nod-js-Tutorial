const express = require('express');
const app = express();
//const debug = require('debug')('app');
const port = 3000;

app.get("/",(req,res) =>{

    res.send('Hello World สวัสดีครับ = Hello');
})

app.listen(port,()=>{
    console.log("Listening on port %d",port);
})