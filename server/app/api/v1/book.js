const Router = require("koa-router");
const { HotBook } = require('@models/hot-book')
const router = new Router({
  prefix: '/v1/book'
});

// 图书 基础数据 服务
// node.js 中间层 微服务
// book 数据库表
// 业务 图书业务数据
router.get('/hot_list', async (ctx, next)=>{
  const books = await HotBook.getAll()
  ctx.body={
    books
  }
})

module.exports = router;
 