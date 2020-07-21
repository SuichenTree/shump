//app.js

//引入towxml插件库
const Towxml = require('/towxml/main'); 

App({
  onLaunch: function () {
    //更新小程序的版本
    wx.getUpdateManager().onUpdateReady(function () {
      wx.showModal({
        title: '更新提示',
        content: '新版本已经准备好，是否重启应用？',
        success(res) {
          if (res.confirm) {
            // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
            updateManager.applyUpdate()
          }
        }
      })
    })
  },
  globalData: {
    userInfo: null,
    // current_server: "https://localhost:9090",
		current_server:"https://www.suichen.xyz:9090",
  },
  towxml: new Towxml() //创建towxml对象，供小程序页面使用
})

