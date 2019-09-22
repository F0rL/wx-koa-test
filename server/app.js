const Koa = require("koa");

const InitManager = require('./core/init')
const app = new Koa();

InitManager.initCore(app)

process.cwd()
// app.use(router.routes()).use(router.allowedMethods());
const port = process.env.PORT || 3000;
app.listen(port);
