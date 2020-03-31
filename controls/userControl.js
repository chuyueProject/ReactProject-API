const UserModel = require("../db/model/userModel")

//添加用户
let addUser = async ({user,pass}) => {
  let result = await UserModel.insertMany({user,pass})
  return result
}

//删除用户
let delUser = async (_id) => {
  let result = await UserModel.deleteOne({ _id })
  return result
}

// 注册
let userReg = async (mail, pass) => {
  //  1. 邮箱是否重复
  let isExst = await UserModel.findOne({ mail })
  let result
  // 如果查询到数据 返回查到的数据 没有返回假 
  if (isExst) {
    throw '邮箱已注册'
  } else {
    result = await UserModel.insertMany({ mail, pass })
  }
  //  2. 插入数据库
  return result
}

// 用户登录
let userLogin = async (user, pass) => {
  // console.log(user,pass)
  let result = await UserModel.findOne({ user, pass })
  if (result) {
  
    return result
  } else {
    throw '用户名或密码不存在'
  }
 
}

// 查询全部用户
let findAllUser = async () => {
  let result = await UserModel.find()
  return result
}


module.exports = {
  userReg,
  userLogin,
  findAllUser,
  addUser,
  delUser

}