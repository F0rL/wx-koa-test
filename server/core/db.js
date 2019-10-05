const {Sequelize, Model} = require('sequelize')
const { unset, clone, isArray } = require('lodash')

const {
  dbName,
    host,
    port,
    user,
    password
} = require('../config/config').database

const sequelize = new Sequelize(dbName,user,password,{
  dialect: 'mysql',
  host,
  port,
  logging: true,
  timezone: '+08:00',
  define: {
    //时间戳 create_time update_time delete_time
    timestamps: true,
    //不会真正的删除，设置deletedAt时间戳,需要timestamps: true
    paranoid: true,
    //改变时间戳key
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    deletedAt: 'deleted_at',
    underscored: true,
    scopes: {
      //排除某些属性
      bh: {
        attributes: {
          exclude: ['created_at','updated_at','deleted_at']
        }
      }
    }
  }
})

sequelize.sync({
  force: false // 强制删除数据库再重建
}) // 不加这句不导入数据库

Model.prototype.toJSON = function(){
  // let data = this.dataValues
  let data = clone(this.dataValues)

  // unset(data, 'updated_at')
  // unset(data, 'created_at')
  // unset(data, 'deleted_at')

  if(isArray(this.exclude)){
    this.exclude.forEach(value => {
      unset(data, value)
    })
  }
  return data
}

module.exports = {
  sequelize
}