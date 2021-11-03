// pages/luckyDraw/luckyDraw.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    allCount: 0,
    itemGroup: [
      {
        name: "SSS",
        probability: 1
      },
      {
        name: "SS",
        probability: 2
      },
      {
        name: "S",
        probability: 4
      },
      {
        name: "A",
        probability: 8
      },
      {
        name: "B",
        probability: 16
      },
      {
        name: "C",
        probability: 69
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  addItem(){
    let {itemGroup} = this.data;
    let a = {};
    itemGroup.push(a);
    this.setData({itemGroup})
  },

  handleInput(e){
    console.log(e);
  },

  lessItem(e){
    let {itemGroup} = this.data;
    itemGroup.splice(parseInt(e.target.id),1)
    this.setData({itemGroup})
  },


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

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

  }
})