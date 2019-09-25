const Router = require("koa-router");
const {User} = require('../../models/user')
const { RegisterValidator } = require("../../validators/validator");
const router = new Router({
  prefix: "/v1/user"
});

// 注册
// 参数：email password1 password2
router.post("/register", async (ctx, next) => {
  //validator必须位于第一行，起到守门员的作用
  const v = await new RegisterValidator().validate(ctx);
  const user = {
    email: v.get('body.email'),
    password: v.get('body.password1'),
    nickname: v.get('body.nickname')
  }
  User.create(user)
});

module.exports = router;
