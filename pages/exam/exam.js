// pages/exam/exam.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    exam_info:null
  },

  
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    /**
     * 获取测试菜单
     */
    let that = this;
    wx.request({
      url: getApp().globalData.current_server + "/shu/exam/getExamList",
      method:"POST",
      header: {
        'content-type': 'application/x-www-form-urlencoded',
      },
      success:function(res){
        that.setData({
          exam_info:res.data
        });
      },fail:function(){
        wx.showToast({
          title: '网络出现了问题？？？',
          icon:"none"     
        })
      }
    })

  },
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  /**
   * 
   * **/
  toAq:function(e){
    console.log("toAq方法,接收参数examid", e.currentTarget.dataset.src)
    wx.navigateTo({
      url: '/subExam/aq/aq?exam_id='+e.currentTarget.dataset.src
    })
  }
})