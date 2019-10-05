const { sequelize } = require("../../core/db");
const { Sequelize, Model, Op } = require("sequelize");
const axios = require("axios");
const util = require("util");

const {Favor} = require('./favor')

class Book extends Model {
  constructor(id) {
    super();
    this.id = id;
  }
  async detail() {
    const url = util.format(global.config.yushu.detailUrl, this.id);
    const detail = await axios.get(url);
    return detail.data;
  }

  static async searchFromYuShu(q, start, count, summary = 1) {
    const url = util.format(
      global.config.yushu.keywordUrl,
      encodeURI(q),
      start,
      count,
      summary
    );
    //axios发送请求如果是中文需要编码
    const result = await axios.get(url);
    return result.data;
  }

  static async getMyFavorBookCount(uid){
    const count = await Favor.count({
      where: {
        type: 400,
        uid
      }
    })
    return count
  }
}

Book.init(
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    fav_nums: {
      type: Sequelize.INTEGER,
      defaultValue: 0
    }
  },
  {
    sequelize,
    tableName: "book"
  }
);

module.exports = {
  Book
};
