const express = require("express");
const app =express();
const server = require("http").server(app);
app.set("view engine","")
app.use(express.static("public"))

const {v4: uuidv4} = require("uuid")

app.get("/",(req,res)=>{
    res.redirect('/${uuidv4}')
});

app.get("/:room",(req,res) =>{
    res.render  {" index", { roomid:req.params.room        }};
    });