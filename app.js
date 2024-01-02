const express = require("express");
const mongoose=require("mongoose");
const User=require("./models/Users");
const Ques=require("./models/Ques");
const Ans=require("./models/Ans");
const bp=require("body-parser");
const ejs=require("ejs");
const axios=require("axios");
const session=require("express-session");

const app=express();

app.use(express.static("public"));
app.set('view engine','ejs');
app.use(bp.urlencoded({extended:true}));

app.use(session({
    secret:"RitikaIsSectretKey",
    resave:false,
    saveUninitialized:false,
}));

mongoose.connect("mongodb://127.0.0.1:27017/JuitConnect", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
// Set up event listeners to handle the connection
db.on("error", (error) => {
  console.error("Database connection error:", error);
});
db.once("open", () => {
  console.log("Connected to the database");
});


//login page
app.get("/login",async(req,res)=>{
    res.render("login");
});

//home page
app.get("/home",function(req,res){
    if(req.session.isAuthenticated){
        res.render("home");
    }else{
        res.redirect("/login");
    }
    
})

app.get("/about",function(req,res){
    if(req.session.isAuthenticated){
        res.render("about");
    }else{
        res.redirect("/login");
    }
})
app.get("/contactus",function(req,res){
    if(req.session.isAuthenticated){
        res.render("contactus");
    }else{
        res.redirect("/login");
    }
})
app.get("/discover",function(req,res){
    if(req.session.isAuthenticated){
        Ques.find({}).then(function(ques){
            res.render("discover",{
                ques:ques
            });
        });
    }else{
        res.redirect("/login");
    }
})
app.get("/profile",function(req,res){
    if(req.session.isAuthenticated){
        res.render("profile");
    }else{
        res.redirect("/login");
    }
})
app.get("/teams",function(req,res){
    if(req.session.isAuthenticated){
        res.render("teams");
    }else{
        res.redirect("/login");
    }
})
app.get("/ask",function(req,res){
    res.render("ask");
})
app.get("/ans/:quesId",function(req,res){
    if(req.session.isAuthenticated){
        const reqPId=req.params.postId;
        console.log(reqPId);
        const question = Ques.findOne({_id:reqPId});
        Ans.find({}).then(function(ans){
            res.render("ans",{
                ans:ans,
                ques:question
            });
            console.log(question);
        });
    }else{
        res.redirect("/login");
    }
})

app.get("/answer",function(req,res){
    res.render("answer");
})

app.post("/answer",function(req,res){
    const ans=new Ans({
        name:req.body.namArea,
        answer:req.body.ansArea,
    })
    ans.save().then(function(){
        res.redirect("/ans/:quesId");
    }).catch(function(err){
        console.log(err);
    });
})

app.post("/ask",function(req,res){
    const ques=new Ques({
        name:req.body.nameArea,
        question:req.body.quesArea,
        keywords:req.body.keywords,
    })
    ques.save().then(function(){
        res.redirect("/discover");
    }).catch(function(err){
        console.log(err);
    });
})

//post request for user login
app.post("/login",async(req,res)=>{
    const username=req.body.EnrollmentNo;
    const password=req.body.password;
    try{
        const response=await axios.post(
            "https://juit-webkiosk-api.onrender.com/v1.0/login",
            { username , password }
        );
    if(response.data.success==true){
        const existingUser=await User.findOne({username});
        if(existingUser){
            req.session.isAuthenticated=true;
            console.log("Login details correctly identified!");
            res.redirect("/home");
        }else{
            const newUser=new User({
                username,
                password,
            });
            newUser.save().then(function(){
                console.log("new user saved successfully");
                req.session.isAuthenticated=true;
                res.redirect("/home");
            }).catch(function(err){
                console.log("error while adding new user:",err);
                res.redirect("/login");
            });
        }
    }else{
        req.session.isAuthenticated=false;
        res.redirect("/login");
    }
    }catch(error){
        console.error("error : ",error.message);
        req.session.isAuthenticated=false;
        res.redirect("/login");
    }
})

app.listen(3000, function() {
    console.log("Server started on port 3000");
});