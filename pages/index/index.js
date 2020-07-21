//获取应用实例
const app = getApp()

Page({
  /**
     * 用户点击右上角分享
     */
  onShareAppMessage: function () {
    return {
      title: 'suichen的个人博客，快来参观把！',
      imageUrl: '/static/wx_qrcode.jpg',
      path: '/pages/index/index'
    }
  },
  data: {
    msgList: [
      {title: "公告：领红包了！！！" },
      {title: "公告：过年了！！！" },
      {title: "公告：寒假到了！！！" }
    ],
    userInfo: {},
    cardCur: 0,
    swiperList: [
      {
        id: 0,
        type: 'image',
        url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg'
      }, {
        id: 1,
        type: 'image',
        url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84001.jpg',
      }, {
        id: 2,
        type: 'image',
        url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg'
      }, {
        id: 3,
        type: 'image',
        url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg'
      }, {
        id: 4,
        type: 'image',
        url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg'
      }, {
        id: 5,
        type: 'image',
        url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big21016.jpg'
      }, {
        id: 6,
        type: 'image',
        url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg'
      }, {
        id: 7,
        type: 'image',
        url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10004.jpg'
      }
    ],
    cuIconList: [
      {
        cuIcon: 'edit',
        color: 'red',
        file_src: 'https://www.suichen.xyz/static/blogFile/blogArticle/C.md',
        name: 'C'
      },
      {
        cuIcon: 'edit',
        color: 'orange',
        file_src: 'https://www.suichen.xyz/static/blogFile/blogArticle/C++.md',
        name: 'C++'
      },
      {
        cuIcon: 'edit',
        color: 'black',
        file_src: 'https://www.suichen.xyz/static/blogFile/blogArticle/java.md',
        name: 'JAVA'
      },
      {
        cuIcon: 'noticefill',
        color: 'olive',
        file_src: 'https://www.suichen.xyz/static/blogFile/blogArticle/javaweb.md',
        name: 'javaweb'
      },
      {
        cuIcon: 'upstagefill',
        color: 'cyan',
        file_src: 'https://www.suichen.xyz/static/blogFile/blogArticle/markdown.md',
        name: 'markdown'
      },
      {
        cuIcon: 'clothesfill',
        color: 'blue',
        file_src: 'https://www.suichen.xyz/static/blogFile/blogArticle/Spring_Boot.md',
        name: 'Spring_Boot'
      }
    ],
    cardlist: [
      {
        title: '我的博客',
        img: 'https://image.weilanwl.com/color2.0/plugin/sylb2244.jpg',
        url: '../plugin/indexes'
      },
      {
        title: '我的简历',
        img: 'https://image.weilanwl.com/color2.0/plugin/wdh2236.jpg',
        url: '../plugin/animation'
      },
      {
        title: '我的收藏',
        img: 'https://image.weilanwl.com/color2.0/plugin/qpct2148.jpg',
        url: '../plugin/drawer'
      }
    ]
  },
  onShow: function () {
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success(user_res) {
              console.log("用户信息获取成功", user_res)
              getApp().globalData.userInfo = user_res.userInfo
              //调用后台接口,将用户信息存储在数据库中
              wx.login({
                success(login_res) {
                  if (login_res.code) {
                    console.log('获取code成功！' + login_res.code)
                    //用code换取用户openid,unionid
                    wx.request({
                      url: getApp().globalData.current_server + "/shu/user/initUserInfo",
                      method: 'POST',
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
                        console.log("初始化用户信息接口调用成功,该用户的userId =" + res.data.userId);
                        getApp().globalData.userInfo.userId = res.data.userId;
                      }, fail: function (res) {
                        console.log("初始化用户信息接口调用失败");
                      }
                    })
                  } else {
                    console.log('获取code失败！' + res.errMsg);
                  }
                }
              })
            }, fail() {
              console.log("用户信息获取失败");
            }
          })
        }else{
          console.log("用户尚未授权");
          //提示用户去授权
          wx.showToast({
            title: '尚未授权,请在我的页面进行授权',
            icon:'none'
          });
        }
      }
    })
  },
  toshow:function(e){
    console.log("toshow方法", e.currentTarget.dataset.src)
    wx.navigateTo({
      url: '/subIndex/show/show?file_src=' + e.currentTarget.dataset.src,
    })
  },
  nofinish:function(){
    wx.showToast({
      title: '尚未完成，敬请期待！',
      icon:"none"
    })
  }
})
