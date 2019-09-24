const Router = require("koa-router");
const { RegisterValidator } = require("../../validators/validator");
const router = new Router({
  prefix: "/v1/user"
});

// 注册
// 参数：email password1 password2
router.post("/register", async (ctx, next) => {
  const v = new RegisterValidator().validate(ctx);
});

module.exports = router;
