// index.js
// 获取应用实例
const app = getApp()
import formatTime from '../../utils/util'
import request from '../../utils/request'
Page({
  data: {
    blogList: [],
    pageIndex: 1,
    pageSize: 10,
    totalPage: 1,
  },
  onLoad: function () {
    this.getBlogList()
  },
  getBlogList() {
    let {pageIndex, pageSize} = this.data;
    const para = {
      pageIndex,pageSize
    };
    request("getBlogList",para).then((res) => {
      res.list.map(item => {
        item.cover = item.cover?item.cover+"?imageView2/2/w/100":""
      })
      this.setData({
        blogList:res.list,
        totalPage:res.totalPage
      })
    })
  },
  toDetail(e){
    wx.navigateTo({
      url:"/pages/detail/detail?id="+e.currentTarget.id
    })
  },
  onShow: function () {
    this.getTabBar().init()
  }
})
