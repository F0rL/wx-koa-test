const Router = require("koa-router");
const router = new Router({
  prefix: '/v1/book'
});

const {
  HttpException,
  ParameterException
} = require("../../../core/http-exception");

const { PositiveIntegerValidator } = require("../../validators/validator");

const {Auth} = require('../../../middlewares/auth')

router.post("/:id/book", async (ctx, next) => {
  const path = ctx.params; // id
  const query = ctx.request.query; // ?query=kuma
  const headers = ctx.request.header; // 包含token
  const body = ctx.request.body; // JSON {"key": "value"}
  const v = await new PositiveIntegerValidator().validate(ctx)
  const id = v.get('path.id',parsed=false)
  ctx.body = "success";
});

router.get("/latest",new Auth().m, async (ctx, next) => {
  ctx.body = ctx.auth.uid
});

module.exports = router;
 