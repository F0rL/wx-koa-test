const { sequelize } = require("../../core/db");
const { Sequelize, Model } = require("sequelize");

class User extends Model {}

User.init(
  {
    id: {
      type: Sequelize.INTEGER,
      //设置为主键  关系型数据库
      //不能重复 不能为空
      //最好为数字，便于查询
      //如果只是简单的自增，并发条件下可能出错
      primaryKey: true,
      //设置自增
      autoIncrement: true
    },
    nickname: Sequelize.STRING,
    email: {
      type: Sequelize.STRING(128),
      unique: true
    },
    password: Sequelize.STRING,
    openid: {
      type: Sequelize.STRING(64),
      unique: true
    }
  },
  { sequelize,
    tableName: 'user'
  }
);

module.exports = {
  User
}
//数据迁移 SQL 更新 风险