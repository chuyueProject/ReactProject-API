//食物相关的数据模型
const mongoose=require('mongoose')

let kindSchema=new mongoose.Schema({
    name:{type:String,required:true}
})

let kindModel=mongoose.model('Kind',kindSchema)

module.exports=kindModel