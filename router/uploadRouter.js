const express=require('express')
const multer=require('multer')
const fs=require('fs')
const path=require('path')
const upload=multer({})
const router=express.Router()

/**
 * @api {post} /admin/user/img  图片上传
 * @apiName uploading
 * @apiGroup imgUploading
 *                
 * @apiSuccess {String} err:状态码
 * @apiSuccess {String} msg:信息描述
 */

router.post('/img',upload.single('upload'),(req,res)=>{
    let {buffer,mimetype,size}=req.file
    if(size>=100000000){
        return res.send({err:-1,msg:'图片尺寸过大'})
    }
    let extName = mimetype.split('/')[1]
      // 将文件写到静态资源目录下
  let name= (new Date()).getTime()+`_`+parseInt(Math.random()*999999)
  fs.writeFile(path.join(__dirname,`../public/img/${name}.${extName}`),buffer,(err)=>{
    if(err){
      
      res.send({err:-3,msg:'上传失败请重试'})
    }else{
      res.send({err:0,msg:'上传成功',path:`/public/img/${name}.${extName}`})
    }
  })
})
module.exports = router




