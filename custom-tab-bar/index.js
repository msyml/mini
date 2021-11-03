// custom-tab-bar/index.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    active: 0,
    list: [
      {
        icon: 'iconfont icon-home',
        text: '首页',
        url: '/pages/index/index'
      },
      {
        icon: 'iconfont icon-gongzuo',
        text: '工具',
        url: '/pages/tools/tools'
      },
      {
        icon: 'iconfont icon-aboutme',
        text: '关于',
        url: '/pages/aboutMe/aboutMe'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {},

  handleTap(e) {
    if (this.data.active === parseInt(e.currentTarget.id)) {
      return
    }
    this.setData({
      active: parseInt(e.currentTarget.id)
    })

    wx.switchTab({ url: this.data.list[parseInt(e.currentTarget.id)].url })
  },

  init() {
    const page = getCurrentPages().pop()
    this.setData({
      active: this.data.list.findIndex((item) => item.url === `/${page.route}`)
    })
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
