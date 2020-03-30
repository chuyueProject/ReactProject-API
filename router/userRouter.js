// 用户相关的路由
/*
1 注册 
   接受用户 邮箱 密码 验证码 
   1. 验证码ok 
   2. 用户是否存在
   3. 注册
2 获取验证码
   用户发一个邮箱 
   我给邮箱发一个验证码
3 登录
*/ 


const  express = require('express')
const  {userLogin,delUser,findAllUser,addUser} = require("../controls/userControl.js")
// const tokenMiddlWare = require('../middleware/tokenMiddleWare')
const  Mail = require('../utils/mail')
const  mails={} 
const router = express.Router()



//用户删除
router.post('/add',(req,res)=>{
  let {mail,pass}=req.body
  addUser({mail,pass})
  .then(()=>{res.send({err:0,msg:'插入成功'})})
  .catch((err)=>{
    res.send({err:-1,msg:'插入失败请重试'})})
})

//用户删除
router.post('/del',(req,res)=>{
  // 获取要删除数据的id
  let {_id} = req.body
  delUser(_id)
  .then(()=>{res.send({err:0,msg:'删除成功'})})
  .catch((err)=>{res.send({err:-1,msg:'删除失败请重试'})})

})
 /**
 * @api {post} /admin/user/getCode  获取邮箱验证码
 * @apiName getCode
 * @apiGroup User
 *
 * @apiParam {String} mail  注册邮箱.
 *
 * @apiSuccess {String} err 状态码r.
 * @apiSuccess {String} msg  信息提示.
 */
router.post('/getCode',(req,res)=>{
  let {mail} = req.body 
  let code =parseInt(Math.random()*9999)
  Mail.send(mail,code).then(()=>{
    mails[mail] = code 
    res.send({err:0,msg:'验证码发送ok'})
  })
  .catch(()=>{
    res.send({err:-1,msg:'验证码发送nook'})
  })
})

 /**
 * @api {post} /admin/user/reg  邮箱注册
 * @apiName reg
 * @apiGroup User
 *
 * @apiParam {String} mail  注册邮箱.
 * @apiParam {String} code  验证码.
 * @apiParam {String} pass  注册密码.
 *
 * @apiSuccess {String} err 状态码r.
 * @apiSuccess {String} msg  信息提示.
 */
router.post('/reg',(req,res)=>{
  let {mail,code,pass} = req.body 
   console.log(code)
   console.log(mails)
  if(code == mails[mail]){
    // 验证码ok 
    userReg(mail,pass)
    .then(()=>{res.send({err:0,msg:'注册ok'})})
    .catch((err)=>{res.send({err:-2,msg:err})})
  }else{
    res.send({err:-1,msg:'验证码错误'})
  }
})

 /**
 * @api {post} /admin/user/login  邮箱登录
 * @apiName login
 * @apiGroup User
 *
 * @apiParam {String} mail  注册邮箱.
 * @apiParam {String} pass  注册密码.
 *
 * @apiSuccess {String} err 状态码r.
 * @apiSuccess {String} msg  信息提示.
 */
router.post('/login',(req,res)=>{
  let {mail,pass} = req.body 
  userLogin(mail,pass)
  .then((info)=>{ 
    // // 登录成功之后产生token 并返回
    // let token =createToken()
    res.send({err:0,msg:'登录成功',userInfo:info})
  })
  .catch((err)=>{ res.send({err:-1,msg:err})})
})

router.post('/getUserList',(req,res)=>{
  findAllUser().then((infos)=>{res.send({list:infos,err:0,msg:'查询成功'})})
  .catch((err)=>{res.send({err:-1,msg:'查询失败请重试'})})
})
module.exports = router