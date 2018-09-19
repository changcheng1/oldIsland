import { classicModel} from '../../models/classic.js'
import { likeModel} from '../../models/like.js'
let ClassicModel = new classicModel()
let LikeModel = new likeModel()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    classicData:"",
    lastest:true,
    first:false
  },
  iLike:function(event){
    LikeModel.getLatest(event.detail.behavior, this.data.classicData.id, this.data.classicData.type)
  },
  updateClassic:function(nextprevious){
    let index = this.data.classicData.index
    ClassicModel.getClassMath(index, nextprevious).then((data) => {
      console.log(data)
        this.setData({
          classicData: data,
          first: ClassicModel.isFirst(data.index),
          lastest: ClassicModel.isLast(data.index)
        })
      })
  },
  previous: function (event) {
    this.updateClassic('previous')
  },
  next(event){
    this.updateClassic('next')
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    ClassicModel.getLatest().then((data)=>{
       this.setData({
         classicData:data
       })
      ClassicModel._setLastIndex(data.index)
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {
    
  }
})