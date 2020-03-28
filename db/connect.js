var mongoose=require('mongoose');
let dburl='mongodb+srv://luckinCoffee:123456yue@luckincoffee-cmrit.mongodb.net/luckincoffee?retryWrites=true&w=majority'
mongoose.connect(dburl,{useNewUrlParser: true,useUnifiedTopology: true })

var db=mongoose.connection
db.on('error',()=>{console.log('数据库连接失败')})
db.once('open',function(){
    console.log('数据库第一次连接成功')
})