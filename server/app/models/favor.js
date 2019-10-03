const { sequelize } = require("../../core/db");
const { Sequelize, Model } = require("sequelize");
const { Art } = require('./art')

class Favor extends Model {
  //业务表
  static async like(art_id, type, uid){
    // 1.添加记录
    // 2. 修改 fav_nums
    // 数据库事务 保证两步都能完成 保证数据的一致性
    // 数据库 ACID 原子性 一致性 隔离性 持久性
    const favor = await Favor.findOne({
      where: {
        art_id,
        type,
        uid
      }
    })
    if(favor) {
      throw new global.errs.LikeError()
    }
    return sequelize.transaction(async t=>{
      await Favor.create({
        art_id,
        type,
        uid
      }, {transaction: t})
      const art = await Art.getData(art_id, type)
      await art.increment('fav_nums', {by: 1, transaction: t})
    })
  }
  static async disLike(art_id, type, uid){
    const favor = await Favor.findOne({
      where: {
        art_id,
        type,
        uid
      }
    })
    if(!favor) {
      throw new global.errs.DislikeError()
    }
    return sequelize.transaction(async t=>{
      await favor.destroy({
        // false软删除 真实删除
        force: true,
        transaction: t,
      })
      const art = await Art.getData(art_id, type)
      await art.decrement('fav_nums', {by: 1, transaction: t})
    })
  }
  static async userLikeIt(art_id, type, uid){
    const favor = await Favor.findOne({
      where: {
        art_id,
        type,
        uid
      }
    })
    return favor ? true : false
  }
}

Favor.init({
  uid: Sequelize.INTEGER,
  art_id: Sequelize.INTEGER,
  type: Sequelize.INTEGER
},{
  sequelize,
  tableName: 'favor'
})

module.exports = {
  Favor
}