// pages/createBookList/createBookList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: '',
    introduce: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  replaceTitle (e) {
    console.log(e.detail.value)
    const title = e.detail.value
    this.setData({
      title: title
    })
  },

  replaceIntroduce (e) {
    console.log(e.detail.value)
    const introduce = e.detail.value
    this.setData({
      introduce: introduce
    })
  },

  createBookList (e) {
    const token = wx.getStorageSync('token')
    const title = this.data.title
    const introduce = this.data.introduce
    console.log(title, introduce)
    wx.request({
      url: 'https://www.juanshuge.com/api/Book/addBookList',
      data: {
        name: title,
        remarks: introduce,
        token: token
      },
      success(res) {
        console.log(res.data)
      }
    })
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