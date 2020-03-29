//这个是数据库相关的控制器

//将数据库的相关内容进行抽离处理
const FoodModel=require('../router/foodRouter')

//查询全部的商品分类
let allKind=async ()=>{
    let result=await FoodModel.find()
    return result
}

//商品分类增加
let insertKind=async (obj)=>{
    let result=await FoodModel.insertMany(obj)
}

//商品分类删除
let removeKind=async (_id)=>{
    let result=await FoodModel.deleteOne({_id})
    return result
}

//商品分类修改
let updataKind=async(_id,updataInfo)=>{
    let result =await FoodModel.updateOne({_id},updataInfo)
}

module.exports={
    allKind,insertKind,removeKind,updataKind
}