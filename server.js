var express = require('express');
 var bodyParser = require('body-parser')
 var jwt = require('jsonwebtoken')
 
 var app = express();

 app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization, Accept,X-Requested-With')
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,PATCH,OPTIONS");
    if(req.method.toLowerCase() === 'options'){
        return res.end()
    }
    next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

 app.set('port', 3005);

 const secret = 'shiqing'

 app.post('/login', (req, res)=>{
    const {username} = req.body;
      console.log(req.body);
    if(username === 'admin'){
        res.json(
            {
                code:0,
                username:'admin',
                token:jwt.sign({username:'admin'},secret,{expiresIn:20})

            }
        )
    }else{
        res.json(
            {
                code:1,
                data:'用户名不存在！！！'
            }
        )
    }
    
});
 //get请求
 app.get('/validate',(req,res)=>{
    const token = req.headers.authorization;
    jwt.verify(token,secret,(err,decode)=>{//验证token的可靠性
      if(err){
          return res.json({
              code:1,
              data:'token失效了',
          })
      }
      console.log(decode.username);
      res.json({
          username:decode.username,
          code:0,//延长token的过期时间
          token:jwt.sign({username:'admin'},secret,{   
              expiresIn:20,
          })
      })
    })
})
app.listen(3005,()=>{
    console.log('服务器已启动');
})