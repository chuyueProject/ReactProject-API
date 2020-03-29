//食物相关的数据模型

const mongoose=require('mongoose')

let koodSchema=new mongoose.Schema({
    name:{type:String,required:true}
})

let foodModel=mongoose.model('Kind',koodSchema)

module.exports=foodModel