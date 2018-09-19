// components/navi/navi.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    first:Boolean,
    lastest:Boolean,
    content:String
  },

  /**
   * 组件的初始数据
   */
  data: {
    leftIcon:"./images/上一个@2x.png",
    leftGrayIcon: "./images/上一个@2xgray.png",
    rightIcon:"./images/下一个@2x.png",
    rightGrayIcon:"./images/下一个@2xgray.png"
  },

  /**
   * 组件的方法列表 
   */
  methods: {
    rightTap:function(evnet){
      if (!this.properties.first){
        let right = 'right'
        this.triggerEvent("rightTap", { right})
      }
    },
    lefTtap: function (evnet){
      if (!this.properties.lastest) {
        let left = 'left'
        this.triggerEvent("leftTap", { left })
      }
    }
  }
})
