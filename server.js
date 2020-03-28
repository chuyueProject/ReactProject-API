const express=require('express')
const bodyParser=require('body-parser');
const app =express()
const db=require('./db/connect')

//post 数据的解析 
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

let goodsRouter=require('./router/goodsRouter')
app.use('/admin/goods',goodsRouter)

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