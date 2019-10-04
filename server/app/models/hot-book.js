const { sequelize } = require("../../core/db");
const { Sequelize, Model, Op } = require("sequelize");

const { Favor } = require("./favor");

class HotBook extends Model {
  static async getAll() {
    const books = await HotBook.findAll({
      order: ["index"]
    });
    const ids = [];
    //异步操作不要用forEach
    //js python 单线程
    //宏任务 微任务 EventLoop
    //单核cpu利用好，要求低
    //并发  并行  不相同
    //java C# 多线程 线程同步 lock
    books.forEach(book => {
      ids.push(book.id);
    });
    //group
    const favors = await Favor.findAll({
      where: {
        art_id: {
          [Op.in]: ids
        },
        type: 400
      },
      //分组
      group: ["art_id"],
      //返回属性
      attributes: ["art_id", [Sequelize.fn("COUNT","*"), "count"]]
    });
    books.forEach(book => {
      HotBook._getEachBookStatus(book, favors)
    })
    return books;
  }
  static _getEachBookStatus(book, favors){
    let count = 0
    favors.forEach(favor => {
      if(book.id === favor.art_id){
        count = favor.get('count')
      }
    })
    book.setDataValue('count', count)
    return book
  }
}

HotBook.init(
  {
    //index 用于排序
    index: Sequelize.INTEGER,
    image: Sequelize.STRING,
    author: Sequelize.STRING,
    title: Sequelize.STRING
  },
  {
    sequelize,
    tableName: "hot_book"
  }
);

module.exports = { HotBook };
