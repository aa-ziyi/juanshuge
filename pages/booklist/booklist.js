// pages/booklist/booklist.t
Page({

  /**
   * 页面的初始数据
   */
  data: {
    BookList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },

  getAllBookList () {
    const token = wx.getStorageSync('token')
    var that = this
    wx.request({
      url: 'https://www.juanshuge.com/api/Book/queryBookList',
      data: {
        token: token
      },
      success (res) {
        const booklist = res.data.data
        console.log(booklist)
        that.setData({
          BookList: booklist
        })
      }
    })
  },

  // 新建书单
  createBookList () {
    wx.navigateTo({
      url: '../createBookList/createBookList',
    })
  },
  
  //前往书单
  toLlistDetail (event) {
    console.log(event.currentTarget.dataset.booklistId)
    wx.navigateTo({
      url: '../bookListDetail/bookListDetail',
    })

  },

  //前往搜索
  toSearch () {
    wx.navigateTo({
      url: '../search/search',
    })
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
    // @TODO 添加后再优化
    this.getAllBookList()
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