import config from './config'
export default (url, data = {}, method = 'GET') => {
  return new Promise((resolve, reject) => {
    wx.request({
      url: config.host + url,
      data,
      method,
      success: (res) => {
        if (res.data.code === 200) {
          resolve(res.data.data)
        } else {
          wx.showToast({
            title: res.data.message,
            icon: 'none'
          })
        }
      },
      fail: (err) => {
        reject(err)
      }
    })
  })
}
