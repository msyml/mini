// pages/detail/detail.js
const app = getApp()
import request from '../../utils/request'
Page({
  /**
   * 页面的初始数据
   */
  data: {
    isLoading: true, // 判断是否尚在加载中
    article: {},
    blogDetail: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (e) {
    console.log(e)
    this.getDetail(e.id)
  },

  getDetail(id) {
    wx.showLoading();
    const para = {
      id
    }
    request('getBlogDetailById', para, 'GET').then((res) => {
      res.content = res.content.replaceAll(".png)",".png?imageView2/2/w/500)")
      let result = app.towxml(res.content, 'markdown')
      // 更新解析数据
      this.setData({
        article: result,
        isLoading: false,
        blogDetail: res
      })
      wx.setNavigationBarTitle({title: res.title})
    }).finally(() => wx.hideLoading())
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
