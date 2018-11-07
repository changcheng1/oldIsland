// components/tag/tag.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    text:String,
  },
  options: {
    multipleSlots: true,
  },
  // 使用组件的样式接口
  externalClasses: ['my-class'],
  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onTap(event){
      const text = this.properties.text
      this.triggerEvent('onTap', {text})
    }
  }
})
