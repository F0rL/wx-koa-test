Page({
  onGetToken(){
    wx.login({
      success: (res) => {
        if(res.code){
          wx.request({
            url: 'http://localhost:3000/v1/token',
            method: 'POST',
            data: {
              account: res.code,
              type: 100
            },
            success: res => {
              console.log(res)
            }
          })
        }
      }
    })
  }
})