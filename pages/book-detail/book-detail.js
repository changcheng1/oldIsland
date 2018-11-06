import { bookModel } from '../../models/book.js'
import { likeModel } from '../../models/like.js'
let BookModel = new bookModel()
let LikeModel = new likeModel()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    comments: [],
    book: null,
    likeStatus: false,
    likeCount: 0,
    posting: false,
    id:"",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading()
    const bid = options.bid
    const detail = BookModel.getHotCountDetail(bid)
    const comments = BookModel.getComments(bid)
    const likeStatus = BookModel.getLikeStatus(bid)
    Promise.all([detail, comments, likeStatus]).then(res=>{
      console.log(res)
      this.setData({
        book: res[0].data,
        comments: res[1].data.comments,
        likeStatus: res[2].data.like_status,
        likeCount: res[2].data.fav_nums,
        id:res[1].data.book_id
      })
      wx.hideLoading()
    })
    
  },
  onFakePost(){
    this.setData({
      posting:true
    })
  },
  iLike: function (event) {
    const like_or_cancel = event.detail.behavior
    LikeModel.getLatest(like_or_cancel, this.data.id, 400)
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
   
})