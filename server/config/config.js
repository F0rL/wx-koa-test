module.exports = {
  // prod dev
  env: 'dev',
  database: {
    dbName: 'wx_koa_book',
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'a3251520'
  },
  security: {
    secretKey: "kumaloveslife",
    expiresIn: 60*60*24
  },
  wx: {
    appId: 'wx2826815a3e7395f8',
    appSecret: 'b73f0c2c2a788e4bbc2314dae92ef75c',
    loginUrl: 'https://api.weixin.qq.com/sns/jscode2session?appid=%s&secret=%s&js_code=%s&grant_type=authorization_code'
  }
}