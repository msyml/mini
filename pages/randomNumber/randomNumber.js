// pages/randomNumber/randomNumber.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    geneCount: 1,
    min: 0,
    max: 10,
    isOnly: true,
    randomNumber: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {},

  handleChanging(e) {
    this.setData({
      geneCount: e.detail.value
    })
  },
  // 处理开发工具报错
  handleInput(e) {
    return
  },
  handleSwitch(e) {
    this.setData({
      isOnly: e.detail.value
    })
  },
  generation(e) {
    let { geneCount, max, min, isOnly } = this.data
    if (min >= 0 && max > min) {
      let randomNumber = []
      for (let index = 0; index < geneCount; index++) {
        let random = Math.round(Math.random() * (max - min) + min)
        if (isOnly) {
          if (randomNumber.indexOf(random) > -1) {
            while (randomNumber.indexOf(random) > -1) {
              random = Math.round(Math.random() * (max - min) + min)
            }
          }
        }
        randomNumber.push(random)
      }
      this.setData({
        randomNumber
      })
    } else {
      wx.showToast({
        title: '最大值或最小值不能为空，最大值不能等于最小值',
        icon: 'none'
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {},

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
