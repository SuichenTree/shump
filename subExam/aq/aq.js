// subExam/aq/aq.js
Page({

  /**
   * 页面的初始数据
   * select_options：用户选择的选项数据
   */
  data: {
    select_options:null,
    question_info:null,
    question_pageNo:0,
    exam_id:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    /**
     * 查询测试题目信息 
     */
    let that = this;
    console.log("接收上一个页面的参数exam_id",options.exam_id);
    //赋值exam_id
    this.setData({
      exam_id: options.exam_id
    })
    wx.request({
      url: getApp().globalData.current_server + "/shu/exam/getQuestionList",
      method: "POST",
      header: {
        'content-type': 'application/x-www-form-urlencoded',
      },
      data:{
        examId: this.data.exam_id
      },
      success:function(res){
        that.setData({
          question_info: res.data
        });
      },fail:function(){
        console.log("查询测试题目信息失败")
      }
    })

    /**
     * 获取用户测试进度
     */
    wx.request({
      url: getApp().globalData.current_server + "/shu/exam/getExamPageNo",
      method: "POST",
      header: {
        'content-type': 'application/x-www-form-urlencoded',
      },
      data: {
        examId: this.data.exam_id,
        userId: getApp().globalData.userInfo.userId
      },
      success: function (res) {
          that.setData({
            question_pageNo: res.data.exam_pageNo
          });
      },fail: function () {
        console.log("查询测试进度接口失败")
      }
    })
  },
  /**
   * 单选框选中事件
   */
  radioSelect:function(e){
    console.log('radio发生change事件，携带value值为：', e.detail.value)
    this.setData({
      select_options: e.detail.value
    })
  },
  /**
   * 多选框选中事件
   */
  checkboxSelect:function(e){
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)
    this.setData({
      select_options: e.detail.value
    })
  },
  /**
   * 下一题
   */
  toNext:function(e){
    console.log("showOption方法接受参数", e.currentTarget.dataset.qt)
    if (this.data.select_options){
      if (e.currentTarget.dataset.qt === "单选题"){
        //单选题答题接口
        let that = this;
        wx.request({
          url: getApp().globalData.current_server + "/shu/exam/danxue_Answer",
          method: "POST",
          header: {
            'content-type': 'application/x-www-form-urlencoded',
          },
          data: {
            userId: getApp().globalData.userInfo.userId,
            examId: this.data.exam_id,
            questionId: this.data.question_info[this.data.question_pageNo].questionId,
            optionId:this.data.select_options,
            pageNo: this.data.question_pageNo + 1
          },
          success: function (res) {

          }, fail: function () {
            wx.showToast({
              title: '单选答题接口调用失败',
              icon: "none"
            })
          }, complete: function () {
            /**
             * 当用户做到最后一题
             */
            if (that.data.question_pageNo + 1 === that.data.question_info.length) {
              //跳转到结果页面
              wx.redirectTo({
                url: '/subExam/result/result?exam_id=' + that.data.exam_id
              })
            } else {
              //换题目，用户选择数据清空
              that.setData({
                question_pageNo: that.data.question_pageNo + 1,
                select_options: null
              })
            }
          }
        })
      } else if (e.currentTarget.dataset.qt === "多选题"){
          //多选题答题接口
        let that = this;
        wx.request({
          url: getApp().globalData.current_server + "/shu/exam/duoxue_Answer",
          method: "POST",
          header: {
            'content-type': 'application/x-www-form-urlencoded',
          },
          data: {
            userId: getApp().globalData.userInfo.userId,
            examId: this.data.exam_id,
            questionId: this.data.question_info[this.data.question_pageNo].questionId,
            optionIds: this.data.select_options,
            pageNo: this.data.question_pageNo + 1
          },
          success: function (res) {

          }, fail: function () {
            wx.showToast({
              title: '多选答题接口调用失败',
              icon: "none"
            })
          }, complete: function () {
            /**
             * 当用户做到最后一题
             */
            if (that.data.question_pageNo + 1 === that.data.question_info.length) {
              //跳转到结果页面
              wx.redirectTo({
                url: '/subExam/result/result?exam_id=' + that.data.exam_id
              })
            } else {
              //换题目，用户选择数据清空
              that.setData({
                question_pageNo: that.data.question_pageNo + 1,
                select_options: null
              })
            }
          }
        })
      }
    }else{
      wx.showToast({
        title: '请答题！！！',
        icon: "none"
      })
    }
  },
  /**
   * 答题
   */
  answer:function(e){
    console.log("选中的选项索引为", e.currentTarget.dataset.option);
    let option_index = e.currentTarget.dataset.option;
    let that = this;
    //判断是否做到最后一题
    if (this.data.question_pageNo + 1 <= this.data.question_info.length){
      //答题接口
      wx.request({
        url: getApp().globalData.current_server + "/shu/exam/answer",
        method: "POST",
        header: {
          'content-type': 'application/x-www-form-urlencoded',
        },
        data: {
          userId: getApp().globalData.userInfo.userId,
          examId: this.data.exam_id,
          questionId: this.data.question_info[this.data.question_pageNo].questionId,
          optionId: this.data.question_info[this.data.question_pageNo].options[option_index].optionId,
          pageNo: this.data.question_pageNo + 1
        },
        success: function (res) {

        }, fail: function () {
          wx.showToast({
            title: '答题接口失败',
            icon:"none"
          })
        },complete:function(){
          /**
           * 当用户做到最后一题
           */
          if (that.data.question_pageNo + 1 === that.data.question_info.length){
            //跳转到结果页面
            wx.redirectTo({
              url: '/subExam/result/result?exam_id='+that.data.exam_id
            })
          }else{
            //换题目
            that.setData({
              question_pageNo: that.data.question_pageNo + 1
            })
          }
        }
      })
    }
    
  }

})