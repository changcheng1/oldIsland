import {
  config
} from '../config.js'
const errMsg = {
  0:"成了",
  1000: "参数错误",
  1001: "输入的json格式不正确",
  1002: "找不到资源",
  1003: "未知错误",
  1004: "禁止访问",
  1005: "不正确的开发者Key",
  1006: "服务器内部错误",
  1007: "访问的链接不存在",
  2000: "你已经点过赞了",
  2001: "你还没有点过赞",
  3000: "该期内容不存在"
}
class Http {
  // 将接口与方法进行分离
  wxRequest(url, data = {}, method = 'GET') {
    return new Promise((resolve, reject) => {
      this._request(url,resolve,reject,data,method)
    })
  }
    _request(url,resolve,reject,data={},method='GET'){
      wx.request({
        url: config.url + url,
        method: method,
        header: {
          'content-type': 'application/json', // 默认值
          'appkey': config.appkey
        },
        data: data,
        success: function (res) {
          let code = res.statusCode.toString();
          if (code.startsWith('2')) {
            resolve(res)
          } else {
            const title = errMsg[res.data.error_code]
            wx.showToast({
              title: title,
              duration: 2000
            })
          }
        },
        error: (error) => {
          reject(error)
        }
      })
    }
}
export {
  Http
}