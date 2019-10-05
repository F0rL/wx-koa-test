module.exports = {
  // prod dev
  env: 'dev',
  database: {
    dbName: 'wx_koa_test',
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
    appId: 'wxf1b3b963d165cef2',
    appSecret: '9fa8efff7637fd226cf3e0b665b4c486',
    loginUrl: 'https://api.weixin.qq.com/sns/jscode2session?appid=%s&secret=%s&js_code=%s&grant_type=authorization_code'
  },
  yushu: {
    detailUrl: 'http://t.yushu.im/v2/book/id/%s',
    keywordUrl: 'http://t.yushu.im/v2/book/search?q=%s&start=%s&count=%s&summary=%s'
  },
  host: 'http://localhost:3000/'
}