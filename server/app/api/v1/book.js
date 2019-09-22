const Router = require("koa-router");
const router = new Router();
const {HttpException, ParammeterException} = require('../../../core/http-exception')

router.post("/v1/:id/book", async (ctx, next) => {
  const path = ctx.params // id
  const query = ctx.request.query // ?query=kuma
  const headers = ctx.request.header // 包含token
  const body = ctx.request.body // JSON {"key": "value"}
  if(!!query) {
    const error = new ParammeterException()
    throw error
  }
  ctx.body = {"key" : "book name"}
});

module.exports = router