const express =require('express')
const router=express.Router()
const {insertDiscount, delDiscount, findDiscountByPage} =require('../controls/discountControl')

router.post('/add',(req,res)=>{
    let {discountName,indate,discount,rule} = req.body 
    insertDiscount({discountName,indate,discount,rule})
    .then((infos)=>{res.send({err:0,msg:'插入成功',list:infos})})
    .catch((err)=>{res.send({err:-1,msg:'插入失败请重试',errInfo:err })})
})


router.delete('/del',(req,res)=>{
    let {_id}=req.body;
    delDiscount(_id)
    .then(()=>{res.send({err:0,msg:'删除成功'})})
    .catch((err)=>{res.send({err:-1,msg:'删除失败请重试'})})
})

router.get('/getInfoByPage',(req,res)=>{
    
    let page=req.query.page||1
    let pageSize=req.query.pageSize||2
    findDiscountByPage(page,pageSize)
    .then((data)=>{
        let {result,allCount}=data
        res.send({ err:0,msg:'查询成功',list:result,allCount})})
    .catch((err)=>{res.send({err:-1,msg:'查询失败请重试'})})
})


module.exports=router

