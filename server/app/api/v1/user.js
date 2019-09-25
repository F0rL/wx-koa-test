const Router = require("koa-router");
const bcrypt = require('bcryptjs')

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
  const salt = bcrypt.genSaltSync(10)
  const psw = bcrypt.hashSync(v.get('body.password1'))
  const user = {
    email: v.get('body.email'),
    password: psw,
    nickname: v.get('body.nickname')
  }
  User.create(user)
});

module.exports = router;
