const expres = require('express')
const router = expres.Router()

const {
    allKind, insertKind, removeKind, updataKind,kindOneData
} = require('../controls/kindControl')

//食物分类列表
/**
 * @api {get} /admin/user/allkind  食物分类列表
 * @apiName list
 * @apiGroup Food
 *                
 * 
 * @apiSuccess {String} err:状态码
 * @apiSuccess {String} msg:信息描述
 */


router.get('/allkind', (req, res) => {

    allKind()
        .then((data) => {
            res.send({ data: data, err: 0, msg: '查询成功' })
        })
        .catch((err) => {
            res.send({
                err: -1, msg: '查询失败'
            })
        })
})

//食物分类删除列表
/**
 * @api {delete} /admin/user/removekind  食物分类删除列表
 * @apiName del
 * @apiGroup Food
 *                
 *@apiParam {string} _id 商品ID.
 * @apiSuccess {String} err:状态码
 * @apiSuccess {String} msg:信息描述
 */
router.delete('/removekind', (req, res) => {
    let { _id } = req.body
    removeKind(_id)
        .then((data) => {
            // console.log(data)
            res.send({ err: 0, msg: '删除成功' })
        })
        .catch((err) => {

            res.send({ err: -1, msg: '删除失败' })
        })
})

//食物分类增加列表
/**
 * @api {post} /admin/user/inserkind  食物分类增加列表
 * @apiName add
 * @apiGroup Food
 *                
 *@apiParam {string} name 商品类别.
 * @apiSuccess {String} err:状态码
 * @apiSuccess {String} msg:信息描述
 */

router.post('/inserkind', (req, res) => {
    let { name } = req.body
    insertKind({ name })
        .then((data) => {
            res.send({ err: 0, msg: "插入成功" })
        })
        .catch((err) => {
            res.send({ err: -1, msg: '插入失败' })
        })
})

//食物分类修改
/**
 * @api {put} /admin/user/updatakind  食物分类修改
 * @apiName updata
 * @apiGroup Food
 *                
 *@apiParam {string} _id 商品ID.
 *@apiParam {string} name 商品信息 .
 * @apiSuccess {String} err:状态码
 * @apiSuccess {String} msg:信息描述
 */
router.put('/updataKind', (req, res) => {
    let { _id, name } = req.body
    updataKind(_id, { name })
        .then((data) => {
            res.send({ err: 0, msg: '修改成功' })
        })
        .catch((err) => {
            res.send({ err: -1, msg: '修改失败' })
        })
})

router.post('/getInfoById',(req,res)=>{
    let {_id}=req.body
    kindOneData(_id).then((infos)=>{res.send({list:infos,err:0,msg:'查询成功'})})
    .catch((err)=>{res.send({err:-1,msg:'查询失败请重试'})})
})

module.exports = router