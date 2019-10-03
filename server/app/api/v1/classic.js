const Router = require("koa-router");

const {Auth} = require('../../../middlewares/auth')
const {Flow} = require('../../models/flow')
const {Art} = require('../../models/art')
const {Favor} = require('../../models/favor')

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
  const art = await Art.getData(flow.art_id, flow.type)
  const likeLatest = await Favor.userLikeIt(flow.art_id, flow.type, ctx.auth.uid)
  // art是一个类，对象序列化json
  art.setDataValue('index', flow.index)
  art.setDataValue('like_status', likeLatest)
  // 下面的方法不严谨
  // art.dataValues.index = flow.index
  ctx.body = art
})

module.exports = router