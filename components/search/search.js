import { keyWord} from '../../models/keyWord.js'
let KeyWord = new keyWord()
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    
  },

  /**
   * 组件的初始数据
   */
  data: {
    q:"",
    historyWords:[],
    hotWords:[]
  },
  attached: function () {
    let data = wx.getStorageSync('q')
    this.setData({
      historyWords: data
    })
    KeyWord.getHot().then(res=>{
      let hotData = res.data.hot
      console.log(hotData)
      this.setData({
        hotWords: hotData
      })
      console.log(this.data.hotWords)
    })
  },
  /**
   * 组件的方法列表
   */
  methods: {
    onCancel(){
      this.triggerEvent('onCancel', {},{})
    },
    onConfirm(event){
      const q = event.detail.value || event.detail.text
      KeyWord.setHistory(q)
      let data = wx.getStorageSync('q')
      this.setData({
        historyWords: data
      })
    },
    onDelete(){
      this.setData({
        q:""
      })
    }
  }
})
