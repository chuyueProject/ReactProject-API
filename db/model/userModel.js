// 用户相关的数据模型

const mongoose = require('mongoose')

let userSchema = new mongoose.Schema({
   user  : { type:String ,required:true},
   pass : { type:String ,required:true},
   // token :{ type:String ,required:false},
})

let userModel = mongoose.model('users',userSchema)
// userModel.insertMany({mail:'huangqin_11163com@qq.com',pass:'123'})
// .then(()=>{
//   console.log('插入ok')
// })
// .catch(()=>{
//   console.log(err)
// })
module.exports = userModel