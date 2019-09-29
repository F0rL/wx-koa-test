const Router = require("koa-router");

const { TokenValidator, NotEmptyValidator } = require("../../validators/validator");
const { LoginType } = require("../../lib/enum");
const { User } = require("../../models/user");
const {generateToken} = require('../../../core/util')
const {Auth} = require('../../../middlewares/auth')
const {WXManager} = require('../../services/wx')


const router = new Router({
  prefix: "/v1/token"
});

router.post("/", async (ctx, next) => {
  const v = await new TokenValidator().validate(ctx);
  let token
  // 分type处理
  // 这里为了兼容x-www-form-urlencoded方法，使用了强制转换成数字
  // 上一步已经判断了type是否存在，强制转换安全
  switch (parseInt(v.get("body.type"))) {
    case LoginType.USER_EMAIL:
      token = await emailLogin(v.get("body.account"), v.get("body.secret"));
      break;
    case LoginType.USER_MINI_PROGRAM:
      token = await WXManager.codeToToken(v.get('body.account'))
      break;
    default:
      throw new global.errs.ParameterException('没有相应的处理方法')
      break;
  }
  ctx.body = {
    token
  }
});

router.post('/verify', async(ctx) => {
  const v = await new NotEmptyValidator().validate(ctx)
  const result = Auth.verifyToken(v.get('body.token'))
  ctx.body = {
    result
  }
})

async function emailLogin(account, secret) {
  const user = await User.verifyEmailPassword(account, secret);
  return generateToken(user.id, Auth.USER)
}

module.exports = router;
