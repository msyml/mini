// pages/dateCalc/dateCalc.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    diffStartDate: null,
    diffEndDate: null,
    diff: null,
    calcDate: null,
    number: null,
    range: [],
    calcFinallyDate: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let range = [];
    for (let i = 1; i <= 365; i++) {
      range.push(i);
    }
    this.setData({range})
  },

  bindDateChange(e) {
    if (e.target.id != "number") {
      this.setData({
        [e.target.id]: e.detail.value
      })
    }else {
      this.setData({
        [e.target.id]: this.data.range[e.detail.value]
      })
    }
    if (e.target.id[0] == "d") {
      this.diff()
    }else {
      this.calc();
    }
  },

  diff() {
    let { diffStartDate, diffEndDate } = this.data
    if (diffStartDate && diffEndDate) {
      let diff = (new Date(diffEndDate) - new Date(diffStartDate)) / 1000 / 60 / 60 / 24
      this.setData({
        diff
      })
    }
  },

  calc() {
    let {calcDate, number} = this.data;
    if (calcDate && number) {
      let time = new Date(calcDate).getTime() + parseInt(number)*86400*1000;
      this.setData({
        calcFinallyDate: this.timeFormat(time)
      })
    }
  },

  timeFormat(date){
    var d = new Date(date);
    var year = d.getFullYear();
    var month = d.getMonth() + 1;
    String(month).length < 2 ? (month = '0' + month):month;
    //	三目运算符
    var day = d.getDate();
    String(day).length < 2 ? (day = '0' + day):day;
    var datetime = year + "-" + month + "-" + day;
    return datetime;
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
