const mongoose=require('mongoose');

const quesSchema=new mongoose.Schema({
    name:String,
    question:String,
    keywords:String
});

const Ques=mongoose.model("Ques",quesSchema);


module.exports=Ques;