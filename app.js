//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    console.log('onLaunch');
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    wx.login({
      success(res) {
        if (res.code) {
          const code = res.code
          console.log(code)
          wx.request({
            url: `https://www.juanshuge.com/api/login?code=${code}`,
            success(res) {
              const token = res.data.toKen
              console.log(token)
              wx.setStorageSync('token', token)
            }
          })
        }
      }
    })

    // 登录
    // wx.login({
    //   success: res => {
    //     if (res.code) {
    //       const code = res.code
    //       wx.request({
    //         url: `https://www.juanshuge.com/api/login?code=${code}`,
    //         success (res) {
    //           console.log(123)
    //           const token = res.data.toKen
    //           console.log(token)
    //           wx.setStorage({
    //             key: "token"
    //           })
    //           wx.getStorage({
    //             key: 'token',
    //             success: function (res) {
    //               console.log(111)
    //               console.log(res.key)
    //             },
    //           })
    //         }
    //       })
    //     }
    //   }
    // })
    // 获取用户信息
    /*
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
    */
  },
  globalData: {
    userInfo: null,
    token: '',
  }
})