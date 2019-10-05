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
const port = process.env.PORT || 3000;
app.listen(port);