import { myBehavior } from '../../models/my-behavior.js'
Component({
  /**
   * 组件的属性列表
   */
  behaviors: [myBehavior],
  properties: {
    src:String
  },

  /**
   * 组件的初始数据
   */
  data: {
    pauseSrc:'images/播放中.png',
    playerSrc:'images/暂停中.png',
    playing:false
  },
  /**
   * 组件的方法列表
   */
  methods: {
    playMusic:function(){
      const backgroundAudioManager = wx.getBackgroundAudioManager()
      if (this.data.playing){
        backgroundAudioManager.src = this.properties.src
        this.setData({
          playing: false
        })
      }else{
        backgroundAudioManager.pause()
        this.setData({
          playing: true
        })
      }
    }
  }
})
