import { myBehavior } from '../../models/my-behavior.js'
const backgroundAudioManager = wx.getBackgroundAudioManager()
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
  attached:function(event){
    console.log(backgroundAudioManager.src)
  },
  /**
   * 组件的方法列表
   */
  methods: {
    playMusic:function(){
      if (!this.data.playing){
        backgroundAudioManager.src = this.properties.src
      }else{
        backgroundAudioManager.pause()
      }
      this.setData({
        playing: !this.data.playing
      })
    }
  }
})
