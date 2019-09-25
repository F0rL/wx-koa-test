const Router = require("koa-router")
const requireDirectory = require('require-directory')

class InitManager {

  static initCore(app) {
    InitManager.app = app
    //初始化
    InitManager.initLoadRouters()
    InitManager.loadHttpException()
    InitManager.loadConfig()
  }

  //自动加载router
  static initLoadRouters() {
    // path config
    const apiDirectory = `${process.cwd()}/app/api`
    requireDirectory(module, apiDirectory, { visit: whenLoadModule });

    function whenLoadModule(obj) {
      if (obj instanceof Router) {
        InitManager.app.use(obj.routes());
      }
    }
  }

  //自动加载全局config
  static loadConfig(path = '') {
    const configPath = path || process.cwd() + `/config/config.js`
    const config = require(configPath)
    global.config = config
  }
  //error处理挂载到全局，不推荐
  static loadHttpException() {
    const errors = require('../core/http-exception')
    global.errs = errors
  }
}

module.exports = InitManager