const Router = require("koa-router");
const router = new Router();
const {
  HttpException,
  ParameterException
} = require("../../../core/http-exception");

const { PositiveIntegerValidator } = require("../../lib/validators/validator");

router.post("/v1/:id/book", async (ctx, next) => {
  const path = ctx.params; // id
  const query = ctx.request.query; // ?query=kuma
  const headers = ctx.request.header; // 包含token
  const body = ctx.request.body; // JSON {"key": "value"}

  // if(true) {
  //   let error = new ParammeterException()
  //   throw error
  // }

  const v = new PositiveIntegerValidator().validate(ctx)
  const id = v.get('path.id',parsed=false)
  ctx.body = "success";
});

module.exports = router;
