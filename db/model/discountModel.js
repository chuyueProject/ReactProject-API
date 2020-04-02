const  mongoose =require('mongoose')

let discountScheama=new mongoose.Schema({
    discountName:{type:String,required:true},
    indate:{type:String,required:true},
    discount : { type:Number ,required:true},
    rule : { type:String ,required:true},
 
})

let discountModel=mongoose.model('discount',discountScheama)
module.exports=discountModel

