import {
  config
} from '../config.js'
const errMsg = {
  1000:"参数错误",
  1001:"输入的json格式不正确",
  1002:"找不到资源",
  1003:"未知错误",
  1004:"禁止访问",
  1005:"不正确的开发者Key",
  1006:"服务器内部错误",
  1007:"访问的链接不存在",
  2000:"你已经点过赞了",
  2001:"你还没有点过赞",
  3000:"该期内容不存在"
}
class Http {
  wxRequest(parms) {
    if (!parms.method) {
      parms.method = 'GET'
    }
   return new Promise((resolve,reject)=>{
      wx.request({
        url: config.url + parms.url,
        method: parms.method,
        header: {
          'content-type': 'application/json', // 默认值
          'appkey': config.appkey
        },
        data:parms.data,
        success:function(res){
          let code = res.statusCode;
           if(code != 200){
             let title = errMsg[res.data.error_code]
             wx.showToast({
               title: title,
               duration: 2000
             })
           }else{
             resolve(res)
           }    
        },
        error: (error) => {
          reject(error)
        }
      })
    })
  }
}
export {
  Http
}