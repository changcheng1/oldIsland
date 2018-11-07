import { Http} from '../util/http.js'
class keyWord extends Http{
  key = 'q'
  maxLength = 10
  getHistory(){
    const data = wx.getStorageSync(this.key)
    if(!data){
      return []
    }
    return data
  }
  getHot(){
    return super.wxRequest(
      '/book/hot_keyword'
    )
  }
  setHistory(keyword){
    let words = this.getHistory()
    const has = words.includes(keyword)
    // 队列 栈
    if (!has) {
      // 数组末尾 删除 ， keyword 数组第一位
      const length = words.length
      if (length >= this.maxLength) {
        words.pop()
      }
      words.unshift(keyword)
      wx.setStorageSync(this.key, words)
    }
  }
}
export {keyWord}