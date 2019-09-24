const Koa = require("koa");
const bodyParser = require("koa-bodyparser")

const InitManager = require('./core/init')
const catchError = require('./middlewares/exception')
const app = new Koa();

require('./app/models/user')

app.use(bodyParser())
app.use(catchError)
InitManager.initCore(app)

// app.use(router.routes()).use(router.allowedMethods());
const port = process.env.PORT || 3000;
app.listen(port);