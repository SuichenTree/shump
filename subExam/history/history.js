// subExam/history/history.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    history_list: null
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    //查询该用户做过的最近的测试历史记录
    let that = this;
    wx.request({
      url: getApp().globalData.current_server + "/shu/exam/history",
      method: "POST",
      header: {
        'content-type': 'application/x-www-form-urlencoded',
      },
      data:{
        userId : getApp().globalData.userInfo.userId
      },
      success: function (res) {
        console.log(res);
        that.setData({
          history_list:res.data
        })
      }, fail: function () {
        wx.showToast({
          title: '服务器开了点小差，请稍后刷新页面！！！',
          icon: "none"
        })
      }
    })
  },
  toResult:function(e){
    console.log("toResult方法，接收参数examid", e.currentTarget.dataset.src)
    //跳转到结果页面
    wx.navigateTo({
      url: '/subExam/result/result?exam_id=' + e.currentTarget.dataset.src
    })
  }
})