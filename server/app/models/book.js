const { sequelize } = require("../../core/db");
const { Sequelize, Model, Op } = require("sequelize");
const axios = require('axios')
const util = require('util')

class Book extends Model {
  constructor(id){
    super()
    this.id = id
  }
  async detail(){
    const url = util.format(global.config.yushu.detailUrl, this.id)
    const detail = await axios.get(url)
    return detail.data
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
}