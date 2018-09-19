import {Http} from '../util/http.js'
class classicModel extends Http {
  getLatest(){
    return new Promise((resolve,reject)=>{
      super.wxRequest({ "url": '/classic/latest' }).then((response) => {
        resolve(response.data)
      })
    })
  }
  getClassMath(index,currentName){
    let currentIndex = currentName == 'next' ? index +1 : index -1;
    let current = currentName == 'next' ? wx.getStorageSync('class-' + (currentIndex + 1)) : wx.getStorageSync('class-' + (currentIndex -1))    
    if (!current){
      return new Promise((resolve, reject) => {
        super.wxRequest({ "url": '/classic/' + index + '/' + currentName }).then((response) => {
          resolve(response.data)
          wx.setStorageSync('class-' + currentIndex, response.data)
        })
      })
    }else{
      return new Promise((resolve,reject)=>{
        resolve(wx.getStorageSync('class-' + currentIndex))
      })  
    }
  }
  isFirst(index){
    return index == 1 ? true : false
  }
  isLast(index){
    let lastIndex = this._getLastIndex()
    return index == lastIndex ? true : false
  }
  _setLastIndex(index){
    wx.setStorageSync('last',index)
  }
  _getLastIndex(){
    let index = wx.getStorageSync('last')
    return index
  }
}
export { classicModel}