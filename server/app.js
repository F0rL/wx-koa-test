require('module-alias/register')

const Koa = require("koa");
const bodyParser = require("koa-bodyparser")
const path = require('path')

const InitManager = require('./core/init')
const catchError = require('./middlewares/exception')
const static = require('koa-static')
const app = new Koa();

app.use(bodyParser())
app.use(catchError)
app.use(static(path.join(__dirname,'./static')))
InitManager.initCore(app)

// app.use(router.routes()).use(router.allowedMethods());
const port = process.env.PORT || 3002;
app.listen(port);

// 静态资源 图片等 消耗流量
// 1.网站目录
// 2.静态资源服务器 微服务 带宽要足够
// 3.云服务 贵  ECS RDS OSS  能够CDN
// 4.github等免费静态资源

// js css html某些情况下可以是静态资源
// vue/react 前端单页面 SEO困难 还是做后台CMS webApp
// to C 还是用模板 SSR