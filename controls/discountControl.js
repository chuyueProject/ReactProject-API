const discountModel = require('../db/model/discountModel')
// 添加优惠券
let insertDiscount = async (obj) => {
    let result = await discountModel.insertMany(obj);
    return result
}

// 删除优惠券
let delDiscount = async (_id) => {
    let result = await discountModel.deleteOne({ _id })
    return result
}

//分页查询
let findDiscountByPage =async (page=1,pageSize=2)=>{
    let allDiscount=await discountModel.find()
    let allCount=allDiscount.length;
    let result=await discountModel.find().skip(Number(page-1)*pageSize).limit(Number(pageSize))
    return {result,allCount}
}

module.exports = {insertDiscount, delDiscount, findDiscountByPage}