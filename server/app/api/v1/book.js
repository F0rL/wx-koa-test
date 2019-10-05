const Router = require("koa-router");

const { HotBook } = require("@models/hot-book");
const { Book } = require("@models/book");
const { Favor } = require("@models/favor");
const { Comment } = require("@models/book-comment");
const  { success } = require('../../lib/helper')
const {
  PositiveIntegerValidator,
  SearchValidator,
  AddShortCommentValidator
} = require("@validator/validator");
const { Auth } = require("../../../middlewares/auth");

const router = new Router({
  prefix: "/v1/book"
});

// 图书 基础数据 服务
// node.js 中间层 微服务
// book 数据库表
// 业务 图书业务数据
router.get("/hot_list", new Auth().m, async (ctx, next) => {
  const books = await HotBook.getAll();
  ctx.body = {
    books
  };
});

//指定书籍
router.get("/:id/detail", new Auth().m, async (ctx, next) => {
  const v = await new PositiveIntegerValidator().validate(ctx);
  const book = new Book(v.get("path.id"));
  ctx.body = await book.detail();
});

//搜索
router.get("/search", new Auth().m, async (ctx, next) => {
  const v = await new SearchValidator().validate(ctx);
  const result = await Book.searchFromYuShu(
    v.get("query.q"),
    v.get("query.start"),
    v.get("query.count")
  );
  ctx.body = result;
});

//喜欢书籍数量
router.get("/favor/count", new Auth().m, async ctx => {
  const count = await Book.getMyFavorBookCount(ctx.auth.uid);
  ctx.body = {
    count
  };
});

//获取书籍点赞情况
router.get("/:book_id/favor", new Auth().m, async ctx => {
  const v = await new PositiveIntegerValidator().validate(ctx, {
    id: "book_id"
  });
  const favor = await Favor.getBookFavor(ctx.auth.uid, v.get("path.book_id"));
  ctx.body = favor
});

//添加短评
router.post("/add/short_comment", new Auth().m, async ctx => {
  const v = await new AddShortCommentValidator().validate(ctx, {
    id: 'book_id'
  })
  Comment.addComment(v.get('body.book_id'), v.get('body.content'))
  success()
});

module.exports = router;
