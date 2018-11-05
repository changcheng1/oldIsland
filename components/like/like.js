// components/index/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    like:{
      type:Boolean,
    },
    count:{
      type:Number
    },
    month:{
      type:String,
      observer: function (newVal, oldVal, changedPath){
        let val = newVal < 10 ? '0' + newVal : newVal
        this.setData({
          _index: val
        })
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    likeSrc: 'images/喜欢@2x.png',
    nolikeSrc: 'images/不喜欢@2x.png',
    moths: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月","十二月"],
    _index:"",
    year:"",
    newMonth:""
  },
  attached:function(){
    let year = new Date().getFullYear()
    let month = new Date().getMonth();
    this.setData({
      year,
      newMonth: this.data.moths[month]
    })
  },
  /**
   * 组件的方法列表
   */
  methods: {
    share(){
      this.onShareAppMessage()
    },
    catchLike: function (event) {
      let like = this.properties.like
      let count = this.properties.count
      count = like ? count - 1 : count + 1
      this.setData({ count: count, like: !like })
      let behavior = this.properties.like ? "like" : "cancel"
      this.triggerEvent("like", { behavior })
    },
  }
})
