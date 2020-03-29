const express=require('express')
const bodyParser=require('body-parser');
const path = require('path')
// const tokenMiddleWare = require('./middleware/tokenMiddleWare')
const app =express()
const db=require('./db/connect')


//post 数据的解析 
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


//静态资源路径

app.use('/public',express.static(path.join(__dirname,'./public')))

let goodsRouter=require('./router/goodsRouter')
let userRouter = require('./router/userRouter')


let kindRouter=require('./router/kindRouter')
let uploadRouer=require('./router/uploadRouter')



app.use('/admin/goods',goodsRouter)
app.use('/admin/user',userRouter)
app.use('/admin/user',kindRouter)
app.use('/admin/upload',uploadRouer)

app.listen(3000,()=>{
    console.log(`/**
    *　　　　　　　 ┏┓　 ┏┓+ +
    *　　　　　　　┏┛┻━━━┛┻┓ + +
    *　　　　　　　┃　　　　　　┃ 　
    *　　　　　　　┃　　　━　　 ┃ ++ + + +
    *　　　　　　 ████━████  ┃+
    *　　　　　　　┃　　　　　　　┃ +
    *　　　　　　　┃　　　┻　　　┃
    *　　　　　　　┃　　　　　　┃ + +
    *　　　　　　　┗━┓　　　┏━┛
    *　　　　　　　　 ┃　　　┃　　　　　　　　　　　
    *　　　　　　　　 ┃　　　┃ + + + +
    *　　　　　　　　 ┃　　　┃　　　　Code is far away from bug with the animal protecting　　　　　　　
    *　　　　　　　　 ┃　　　┃ + 　　　　神兽保佑,代码无bug　　
    *　　　　　　　　 ┃　　　┃
    *　　　　　　　　 ┃　　　┃　　+　　　　　　　　　
    *　　　　　　　　 ┃　 　 ┗━━━┓ + +
    *　　　　　　　　 ┃ 　　　　   ┣┓
    *　　　　　　　　 ┃ 　　　　　 ┏┛
    *　　　　　　　　 ┗┓┓┏━┳┓┏┛ + + + +
    *　　　　　　　　  ┃┫┫ ┃┫┫
    *　　　　　　　　  ┗┻┛ ┗┻┛+ + + +
    */`)
})