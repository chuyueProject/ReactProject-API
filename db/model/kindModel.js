//食物相关的数据模型
//hao
const mongoose=require('mongoose')

let kindSchema=new mongoose.Schema({
    name:{type:String,required:true}
})

let foodModel=mongoose.model('Kind',kindSchema)

module.exports=foodModel