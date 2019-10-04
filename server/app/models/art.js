const { Op } = require("sequelize");
const { flatten } = require("lodash");

const { Movie, Music, Sentence } = require("./classic");
class Art {
  constructor(art_id, type) {
    this.art_id = art_id;
    this.type = type;
  }

  async getDetail(uid) {
    // favor art 循环导入，可能会出全新啊Favor为null
    const { Favor } = require("./favor");

    const art = await Art.getData(this.art_id, this.type);
    if (!art) {
      throw new global.errs.NotFound();
    }
    const like = await Favor.userLikeIt(this.art_id, this.type, uid);

    return {
      art,
      like_status: like
    };
  }

  static async getData(art_id, type, useScope = true) {
    let art = null;
    const finder = {
      where: {
        id: art_id
      }
    };
    //修复一个bug，使用scope后，查询数据库再做操作会出现报错
    const scope = useScope ? "bh" : null;
    // 为了兼容 type 为字符串,lib/enum 里面放宽了检测
    // 自己改的，非规范
    type = parseInt(type);
    switch (type) {
      case 100:
        art = await Movie.scope(scope).findOne(finder);
        break;
      case 200:
        art = await Music.scope(scope).findOne(finder);
        break;
      case 300:
        art = await Sentence.scope(scope).findOne(finder);
        break;
      case 400:
        break;
      default:
        break;
    }
    return art;
  }

  static async getList(artInfoList) {
    const artInfoObj = {
      100: [],
      200: [],
      300: []
    };
    for (let artInfo of artInfoList) {
      artInfoObj[artInfo.type].push(artInfo.art_id);
    }
    const arts = [];
    for (let key in artInfoObj) {
      const ids = artInfoObj[key];
      if (ids.length === 0) {
        continue;
      }
      //obj的key是字符串
      key = parseInt(key);
      arts.push(await Art._getListByType(ids, key));
    }
    return flatten(arts);
  }

  static async _getListByType(ids, type) {
    let arts = null;
    const finder = {
      where: {
        id: {
          [Op.in]: ids
        }
      }
    };
    const scope = "bh";
    type = parseInt(type);
    switch (type) {
      case 100:
        arts = await Movie.scope(scope).findOne(finder);
        break;
      case 200:
        arts = await Music.scope(scope).findOne(finder);
        break;
      case 300:
        arts = await Sentence.scope(scope).findOne(finder);
        break;
      case 400:
        break;
      default:
        break;
    }
    return arts;
  }
}

module.exports = { Art };
