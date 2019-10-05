const { sequelize } = require("../../core/db");
const { Sequelize, Model } = require("sequelize");

class Comment extends Model {
  static async addComment(bookId, content) {
    const comment = await Comment.findOne({
      where: {
        book_id: bookId,
        content
      }
    });
    //实际可以进一步判断模糊相似而不是完全相同
    if (!comment) {
      return await Comment.create({
        book_id: bookId,
        content,
        num: 1
      });
    } else {
      return await comment.increment("nums", {
        by: 1
      });
    }
  }
  static async getComments(bookId) {
    const comments = await Comment.findAll({
      where: {
        book_id: bookId
      }
    });
    return comments;
  }
}

Comment.init(
  {
    content: Sequelize.STRING(12),
    nums: {
      type: Sequelize.INTEGER,
      defaultValue: 0
    },
    book_id: Sequelize.INTEGER
  },
  {
    sequelize,
    tableName: "comment"
  }
);

module.exports = {
  Comment
};
