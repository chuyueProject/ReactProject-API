const express =require('express')
const router=express.Router()
const {insertGoods,findGoods,delGoods,updateGoods,findAllGoods,findGoodsByPage,findGoodsByKw,findGoodsByType} =require('../controls/goodsControl')
/**
 * @api {post} /admin/goods/add   商品添加
 * @apiName add
 * @apiGroup Goods
 *
 * @apiParam {String} Chinesename  咖啡中文名
 * @apiParam {String} Englishname 咖啡英文名.
 * @apiParam {Number} price 价格.
 * @apiParam {String} desc  咖啡描述
 * @apiParam {Array} picture 轮播图链接.
 * @apiParam {Number} temp 温度 冰：1，热：0.
 * @apiParam {Number} cream 奶油 默认奶油：1 ，无奶油：0.
 *
 * @apiSuccess {String} err 状态码.
 * @apiSuccess {String} msg  信息提示.
 */
router.post('/add',(req,res)=>{
    let {Chinesename,Englishname,price,desc,picture,temp,cream} = req.body 
    insertGoods({Chinesename,Englishname,price,desc,picture,temp,cream})
    .then((infos)=>{res.send({err:0,msg:'插入成功',list:infos})})
    .catch((err)=>{res.send({err:-1,msg:'插入失败请重试'})})
})
/**
 * @api {post} /admin/goods/getInfoById   商品查询
 * @apiName getInfoById
 * @apiGroup Goods
 *
 * @apiParam {String} _id  商品ID

 *
 * @apiSuccess {String} err 状态码.
 * @apiSuccess {String} msg  信息提示.
 * @apiSuccess {Array} list  查询到的数据.
 */
router.get('/getInfoById',(req,res)=>{
    let {_id}=req.query
    findGoods(_id).then((infos)=>{res.send({list:infos,err:0,msg:'查询成功'})})
    .catch((err)=>{res.send({err:-1,msg:'查询失败请重试'})})
})

/**
 * @api {post} /admin/goods/getAllInfo   商品列表
 * @apiName getAllInfo
 * @apiGroup Goods
 *
 * @apiSuccess {String} err 状态码.
 * @apiSuccess {String} msg  信息提示.
 * @apiSuccess {Array} list  查询到的数据.
 */
router.get('/getAllInfo',(req,res)=>{
    findAllGoods().then((infos)=>{res.send({list:infos,err:0,msg:'查询成功'})})
    .catch((err)=>{res.send({err:-1,msg:'查询失败请重试'})})
})

/**
 * @api {post} /admin/goods/update   商品更新
 * @apiName update
 * @apiGroup Goods
 *
 * @apiParam {String} _id  商品ID
 * @apiParam {String} Chinesename  咖啡中文名
 * @apiParam {String} Englishname 咖啡英文名.
 * @apiParam {Number} price 价格.
 * @apiParam {String} desc  咖啡描述
 * @apiParam {Array} picture 轮播图链接.
 * @apiParam {Number} temp 温度 冰：1，热：0.
 * @apiParam {Number} cream 奶油 默认奶油：1 ，无奶油：0.
 *
 * @apiSuccess {String} err 状态码.
 * @apiSuccess {String} msg  信息提示.
 */
router.put('/update',(req,res)=>{
    let {_id, Chinesename,Englishname,price,desc,picture,temp,cream} = req.body 
    updateGoods(_id,{Chinesename,Englishname,price,desc,picture,temp,cream})
    .then(()=>{res.send({err:0,msg:'修改成功'})})
    .catch((err)=>{res.send({err:-1,msg:'修改失败请重试'})})
})
/**
 * @api {post} /admin/goods/del   商品删除
 * @apiName del
 * @apiGroup Goods
 *
 * @apiParam {String} _id  商品ID
 *
 * @apiSuccess {String} err 状态码.
 * @apiSuccess {String} msg  信息提示.
 */
router.delete('/del',(req,res)=>{
    console.log(req.body)
    let {_id}=req.body;
    // console.log(_id)
    delGoods(_id)
    .then(()=>{res.send({err:0,msg:'删除成功'})})
    .catch((err)=>{res.send({err:-1,msg:'删除失败请重试'})})
})
/**
 * @api {post} /admin/goods/getInfoByPage   分页查询
 * @apiName getInfoByPage
 * @apiGroup Goods
 *
 * @apiParam {String} page  当前页数
 * @apiParam {String} pageSize  每页条数
 *
 * @apiSuccess {String} err 状态码.
 * @apiSuccess {String} msg  信息提示.
 * @apiSuccess {Array} list  查询到的数据列表.
 * @apiSuccess {Number} allCount  查询到的数据总数.
 */
router.get('/getInfoByPage',(req,res)=>{
    
    let page=req.query.page||1
    let pageSize=req.query.pageSize||2
    findGoodsByPage(page,pageSize)
    .then((data)=>{
        let {result,allCount}=data
        res.send({ err:0,msg:'查询成功',list:result,allCount})})
    .catch((err)=>{res.send({err:-1,msg:'查询失败请重试'})})
})
/**
 * @api {post} /admin/goods/findGoodsByKw   关键字查询
 * @apiName findGoodsByKw
 * @apiGroup Goods
 *
 * @apiParam {String} page  当前页数
 * @apiParam {String} pageSize  每页条数
 * @apiParam {String} kw  关键字
 *
 * @apiSuccess {String} err 状态码.
 * @apiSuccess {String} msg  信息提示.
 * @apiSuccess {Array} list  查询到的数据列表.
 * @apiSuccess {Number} allCount  查询到的数据总数.
 */
router.get('/findGoodsByKw',(req,res)=>{
    let kw=req.query.kw
    let page=req.query.page||1
    let pageSize=req.query.pageSize||2
    findGoodsByKw(kw,page,pageSize)
    .then((data)=>{
        let {result,allCount}=data
        res.send({ err:0,msg:'查询成功',list:result,allCount})})
    .catch((err)=>{res.send({err:-1,msg:'查询失败请重试'})})
})

/**
 * @api {post} /admin/goods/findGoodsByType   分类查询
 * @apiName findGoodsByType
 * @apiGroup Goods
 *
 * @apiParam {String} page  当前页数
 * @apiParam {String} pageSize  每页条数
 * @apiParam {String} kw  关键字
 *
 * @apiSuccess {String} err 状态码.
 * @apiSuccess {String} msg  信息提示.
 * @apiSuccess {Array} list  查询到的数据列表.
 * @apiSuccess {Number} allCount  查询到的数据总数.
 */
router.get('/findGoodsByType',(req,res)=>{
    let goodsType=req.query.goodsType
    let page=req.query.page||1
    let pageSize=req.query.pageSize||2
    findGoodsByType(goodsType,page,pageSize)
    .then((data)=>{
        let {result,allCount}=data
        res.send({ err:0,msg:'查询成功',list:result,allCount})})
    .catch((err)=>{res.send({err:-1,msg:'查询失败请重试'})})
})


module.exports=router

