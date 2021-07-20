const Koa = require('koa');
const app = new Koa();
const Router = require('koa-router');
const router = new Router();
var bodyParser= require('koa-bodyparser');   // 引入模块
const cors = require('./koa-cors'); //跨域处理文件koa-cors.js
app.use(bodyParser());      // 将模块作为koa的中间件引入
app.use(cors);

var process = require('child_process');
const docmd = async()=>{
    return new Promise((resolve,reject)=>{
    var cmd = 'npm run build';
    process.exec(cmd, function(error, stdout, stderr) {
        resolve(stdout) 
    });
    // ctx.body = cmd;
    })
}

router.post('/do',async (ctx)=>{
   let data = await docmd()
   ctx.body = data;
})

app.use(router.routes());

app.listen(3000);