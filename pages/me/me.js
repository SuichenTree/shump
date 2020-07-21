const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    starCount: 11,
    forksCount: 22,
    visitTotal: 33,
    user_id:0,
    user_info:null
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log("onshow")
    // 设置用户信息
    this.setData({
      user_id: getApp().globalData.userInfo.userId,
      user_info:getApp().globalData.userInfo
    });
  },
  //用户登录
  wxLogin:function(){
    console.log("个人信息页,初始化用户信息!!!")
    
    let that = this;
    //当从全局变量中读取不到userInfo数据,即页面显示未登录状态时。
    wx.getUserInfo({
      success: function (get_res) {
        console.log("wx_getUserinfo", get_res)
        getApp().globalData.userInfo = get_res.userInfo;
        wx.login({
          success: function (login_res) {
            console.log("获取用户登录凭证code成功");
            //调用后台初始化用户接口，将用户信息存入数据库中
            wx.request({
              url: getApp().globalData.current_server + "/shu/user/initUserInfo",
              method: "POST",
              header: {
                'content-type': 'application/x-www-form-urlencoded',
              },
              data: {
                code: login_res.code,
                head: getApp().globalData.userInfo.avatarUrl,
                name: getApp().globalData.userInfo.nickName,
                gender: getApp().globalData.userInfo.gender
              },
              success: function (res) {
                console.log("初始化用户信息接口调用成功,userId =" + res.data.userId);
                getApp().globalData.userInfo.userId = res.data.userId;
                //刷新页面
                that.onShow();
              }, fail: function (res) {
                console.log("初始化用户信息接口调用失败");
              }
            });
          }
        })
      }
    });
  },
  toUserInfo:function(){
    wx.navigateTo({
      url: '/subMe/userinfo/userinfo',
    })
  },
  toMsg:function(){
    wx.navigateTo({
      url: '/subMe/msg/msg',
    })
  },
  nofinish: function () {
    wx.showToast({
      title: '尚未完成，敬请期待！',
      icon: "none"
    })
  },showQrcode:function(){
    wx.previewImage({
      urls: ['/static/wx_qrcode.jpg'],
      current: '/static/wx_qrcode.jpg' // 当前显示的图片链接      
    })
  },
  toExam:function(){
    wx.navigateTo({
      url: '/subExam/aq/aq'
    })
  },
  toHistory:function(){
    wx.navigateTo({
      url: '/subExam/history/history'
    })
  }
})