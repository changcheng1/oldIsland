// components/redLike/redLike.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    like: {
      type: Boolean,
    },
    count: {
      type: Number
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    likeSrc: 'images/喜欢@2x.png',
    nolikeSrc: 'images/不喜欢@2x.png',
  },

  /**
   * 组件的方法列表
   */
  methods: {
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
