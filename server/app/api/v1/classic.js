const Router = require("koa-router");

const {Auth} = require('../../../middlewares/auth')
const {Flow} = require('../../models/flow')

const router = new Router({
  prefix: '/v1/classic'
});

router.get("/", async (ctx, next) => {
  ctx.body = {"key" : "classic name"}
});

router.get("/lastest", new Auth().m, async(ctx, next)=>{
  //排序查找最新
  const flow = await Flow.findOne({
    order: [
      ['index','DESC']
    ]
  })
  ctx.body = flow
})

module.exports = router