const express  = require("express");

const app = express();

app.get("/", function(req, res){
    res.send("HELLO WORLD!!")
})

app.get("/myname", function(req, res){
    res.send("Raviteja!!")
})

app.listen(3000, function(){
    console.log("Server running on http://localhost:3000")
})

