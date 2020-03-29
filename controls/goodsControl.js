//商品接口
const GoodsModel = require('../db/model/goodsModel')
// 添加商品
let insertGoods = async (obj) => {
    let result = await GoodsModel.insertMany(obj);
    return result
}

// 查询单个商品
let findGoods = async (_id) => {
    let result = await GoodsModel.find({ _id })
    return result
}

// 查询全部商品
let findAllGoods = async () => {
    let result = await GoodsModel.find()
    return result
}

// 删除商品
let delGoods = async (_id) => {
    let result = await GoodsModel.deleteOne({ _id })
    return result
}

//修改商品
let updateGoods = async (_id, updateInfo) => {
    // console.log('id',_id)
    // console.log('updateInfo',updateInfo)
    let result = await GoodsModel.updateOne({ _id }, updateInfo)
    return result
}

//分页查询
let findGoodsByPage =async (page=1,pageSize=2)=>{
    let allGoods=await GoodsModel.find()
    let allCount=allGoods.length;
    // console.log(page,pageSize)
    let result=await GoodsModel.find().skip(Number(page-1)*pageSize).limit(Number(pageSize))
    return {result,allCount}
}

//关键字查询
let findGoodsByKw=async (kw,page,pageSize)=>{
    let regex =new RegExp(kw)
    let allGoods=await GoodsModel.find({$or:[{desc:{$regex:regex}},{Chinesename:{$regex:regex}}]})
    let allCount=allGoods.length
    let result=await GoodsModel.find({$or:[{desc:{$regex:regex}},{Chinesename:{$regex:regex}}]})
    .skip(Number((page-1)*pageSize)).limit(Number(pageSize))
    return {result,allCount}
}

//分类查询
let findGoodsByType =async (goodsType,page,pageSize)=>{
    let allGoods=await GoodsModel.find({goodsType})
    let allCount=allGoods.length
    let result=await GoodsModel.find({goodsType})
    .skip(Number((page-1)*pageSize)).limit(Number(pageSize))
    return {result,allCount}

}

module.exports = {
    insertGoods, findGoods, delGoods, updateGoods,findAllGoods,findGoodsByPage,findGoodsByKw,findGoodsByType
}