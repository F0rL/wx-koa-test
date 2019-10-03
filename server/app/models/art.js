const {
  Movie,
  Music,
  Sentence
} = require('./classic')

class Art {
  static async getData(art_id, type, useScope=true) {
    let art = null
    const finder = {
      where: {
        id: art_id
      }
    }
    //修复一个bug，使用scope后，查询数据库再做操作会出现报错
    const scope = useScope ? 'bh' : null
    // 为了兼容 type 为字符串,lib/enum 里面放宽了检测
    // 自己改的，非规范
    type = parseInt(type)
    switch (type) {
      case 100:
          art = await Movie.scope(scope).findOne(finder)
        break;
      case 200:
          art = await Music.scope(scope).findOne(finder)
        break;
      case 300:
          art = await Sentence.scope(scope).findOne(finder)
        break;
      case 400:
        break;
      default:
        break;
    }
    return art
  }
}

module.exports = { Art }