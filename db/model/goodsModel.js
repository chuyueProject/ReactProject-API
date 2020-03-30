const mongoose =require('mongoose')

let goodsScheama=new mongoose.Schema({
    Chinesename:{type:String,required:true},
    Englishname:{type:String,required:true},
    price : { type:Number ,required:true},
    oldprice : { type:Number ,required:true},
    putaway : { type:Number ,required:true},
    desc  : { type:String ,required:true},
    picture: { type:String ,required:true},
    temp:{type:Number,required:true},
    cream:{type:Number,required:true},
    kind: { type:String ,required:true},
})

let goodsModel=mongoose.model('goods',goodsScheama)
module.exports=goodsModel