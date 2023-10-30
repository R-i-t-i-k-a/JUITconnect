const express = require("express");
const app=express();

app.get("/",function(req,res){
    res.send("Login page to be made here");
});

app.get("/home",function(req,res){
    res.send("Home Page");
});

app.get("/home/discover",function(req,res){
    res.send("About the website goes here");
});

app.get("/home/profilesection",function(req,res){
    res.send("Profile section of the user here");
});

app.get("/home/ask",function(req,res){
    res.send("The user can ask questions here");
});

app.listen(3000, function() {
    console.log("Server started on port 3000");
});