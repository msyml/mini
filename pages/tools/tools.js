// pages/tools/tools.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    toolList: [
      {
        text: '生成随机数',
        desc: '生成指定范围内的随机数',
        path: '/pages/randomNumber/randomNumber'
      },
      {
        text: '单位薪资计算',
        desc: '根据一年总的到手工资计算单位工资',
        path: '/pages/unitSalary/unitSalary'
      },
      {
        text: '等会儿吃啥',
        desc: '如果你不知道吃什么，就让系统帮你做选择吧。也许选择中你知道自己该吃啥了',
        path: '/pages/eating/eating'
      },
      {
        text: '模拟抽奖',
        desc: '是否常常因为自己氪金无货而悔恨，拒绝氪金，从我做起',
        path: '/pages/luckyDraw/luckyDraw'
      },
      {
        text: '房贷计算器',
        desc: '买房魂，买房人，买房都是人众人',
        path: '/pages/house/house'
      },
      {
        text: '日期计算器',
        desc: '日期计算器',
        path: '/pages/dateCalc/dateCalc'
      }
    ]
  },

  toToolPage(e){
    wx.navigateTo({ url: e.target.dataset.path})
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.getTabBar().init()
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {}
})
