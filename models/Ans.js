const mongoose=require('mongoose');

const ansSchema=new mongoose.Schema({
    name:String,
    answer:String,
});

const Ans=mongoose.model("Ans",ansSchema);

module.exports=Ans;