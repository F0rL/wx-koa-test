// email password
// code 小程序生成 微信
// openID  唯一标识 鉴定
// 不需要注册
// code 动态生成
// appid appsecret 小程序固定

const util = require('util')
const axios = require('axios')

const {User} = require('../models/user')
const {generateToken} = require('../../core/util')
const {Auth} = require('../../middlewares/auth')

class WXManager {
  static async codeToToken(code) {
    const url = util.format(global.config.wx.loginUrl,
      global.config.wx.appId,
      global.config.wx.appSecret,
      code
      )
    const result = await axios.get(url)
    if(result.status !== 200) {
      throw new global.errs.AuthFailed('openid获取失败')
    }
    const errCode = result.data.errcode
    const errmsg = result.data.errmsg
    if(errCode){
      throw new global.errs.AuthFailed('openid获取失败,错误信息：'+ errmsg)
    }
    let user  = await User.getUserByOpenid(result.data.openid)
    if(!user){
      user = await User.registerByOpenid(result.data.openid)
    }
    return generateToken(user.id, Auth.USER)
  }
}

module.exports = {
  WXManager
}
