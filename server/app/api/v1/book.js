const Router = require("koa-router");
const { HotBook } = require('@models/hot-book')
const { Book } = require('@models/book')
const { PositiveIntegerValidator } = require("@validator/validator");

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

router.get('/:id/detail', async (ctx, next) => {
  const v = await new PositiveIntegerValidator().validate(ctx)
  const book = new Book(v.get('path.id'))
  ctx.body = await book.detail()
})

module.exports = router;
 