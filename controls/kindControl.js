//这个是数据库相关的控制器

//将数据库的相关内容进行抽离处理
const kindRouter=require('../db/model/kindModel')


//查询全部的商品分类
let allKind=async ()=>{
    let result=await kindRouter.find()
    return result
}

//商品分类增加
let insertKind=async (obj)=>{

    // console.log(obj)

    let result=await kindRouter.insertMany(obj)
   
}

//商品分类删除
let removeKind=async (_id)=>{
   
    let result=await kindRouter.deleteOne({_id})
    return result
}

//商品分类修改
let updataKind=async(_id,updataInfo)=>{
  
    let result =await kindRouter.updateOne({_id},updataInfo)
    return result
}

//查询一条数据
let kindOneData=async(_id)=>{
    let result = await kindRouter.find({ _id })
    return result
}

module.exports={
    allKind,insertKind,removeKind,updataKind,kindOneData
}