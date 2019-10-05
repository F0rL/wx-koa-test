import { Base64 } from 'js-base64'
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
              const code = res.statusCode.toString()
              if(code.startsWith('2')){
                wx.setStorageSync('token', res.data.token)
              }
            }
          })
        }
      }
    })
  },
  onVerifyToken(){
    wx.request({
      url: 'http://localhost:3000/v1/token/verify',
      method: 'POST',
      data: {
        //token: wx.getStorageSync('token')
        token: '213sfdsfgf'
      },
      success: res=>{
        console.log(res)
      }
    })
  },
  onGetLatest(){
    wx.request({
      url: 'http://localhost:3000/v1/classic/lastest',
      method: 'GET',
      success: res=>{
        console.log(res)
      },
      header: {
        Authorization: this._encode()
      }
    })
  },
  _encode(){
    const token = wx.getStorageSync('token')
    const base64 = Base64.encode(token+':')
    // Authorization: Basic base64(account: password)
    return 'Basic '+ base64
  },
  onLike(){
    wx.request({
      url: 'http://localhost:3000/v1/like',
      method: 'POST',
      header: {
        Authorization: this._encode()
      },
      data: {
        art_id: 1,
        type: 100
      },
      success: res=>{
        console.log(res)
      }
    })
  },
  disLike(){
    wx.request({
      url: 'http://localhost:3000/v1/like/cancel',
      method: 'POST',
      header: {
        Authorization: this._encode()
      },
      data: {
        art_id: 1,
        type: 100
      },
      success: res=>{
        console.log(res.data)
      }
    })
  },
  onGetNext(){
    wx.request({
      url: 'http://localhost:3000/v1/classic/6/next',
      method: 'GET',
      header: {
        Authorization: this._encode()
      },
      success: res=>{
        console.log(res.data)
      }
    })
  },
  onGetPrevious(){
    wx.request({
      url: 'http://localhost:3000/v1/classic/6/previous',
      method: 'GET',
      header: {
        Authorization: this._encode()
      },
      success: res=>{
        console.log(res.data)
      }
    })
  },
  onGetClassicFavor(){
    wx.request({
      url: 'http://localhost:3000/v1/classic/100/1/favor',
      method: 'GET',
      header: {
        Authorization: this._encode()
      },
      success: res=>{
        console.log(res.data)
      }
    })
  },
  onGetMyFavorList(){
    wx.request({
      url: 'http://localhost:3000/v1/classic/favor',
      method: 'GET',
      header: {
        Authorization: this._encode()
      },
      success: res=>{
        console.log(res.data)
      }
    })
  },
  onGetOne(){
    wx.request({
      url: 'http://localhost:3000/v1/classic/200/1',
      method: 'GET',
      header: {
        Authorization: this._encode()
      },
      success: res=>{
        console.log(res.data)
      }
    })
  },
  onGetHotList(){
    wx.request({
      url: 'http://localhost:3000/v1/book/hot_list',
      method: 'GET',
      header: {
        Authorization: this._encode()
      },
      success: res=>{
        console.log(res.data)
      }
    })
  },
  onGetOneBook(){
    wx.request({
      url: 'http://localhost:3000/v1/book/333/detail',
      method: 'GET',
      header: {
        Authorization: this._encode()
      },
      success: res=>{
        console.log(res.data)
      }
    })
  },
  onSearchBook(){
    wx.request({
      url: 'http://localhost:3000/v1/book/search',
      method: 'GET',
      data: {
        q: '东野圭吾',
        count: '5'
      },
      header: {
        Authorization: this._encode()
      },
      success: res=>{
        console.log(res.data)
      }
    })
  },
  onGetFavorCount(){
    wx.request({
      url: 'http://localhost:3000/v1/book/favor/count',
      method: 'GET',
      header: {
        Authorization: this._encode()
      },
      success: res=>{
        console.log(res.data)
      }
    })
  },
  onGetBookFavor(){
    wx.request({
      url: 'http://localhost:3000/v1/book/1061/favor',
      method: 'GET',
      header: {
        Authorization: this._encode()
      },
      success: res=>{
        console.log(res.data)
      }
    })
  },
  onAddBookComment(){
    wx.request({
      url: 'http://localhost:3000/v1/book/add/short_comment',
      method: 'POST',
      data: {
        book_id: 1061,
        content: '写的不错写的不错写的不错写的不错写的不错写的不错'
      },
      header: {
        Authorization: this._encode()
      },
      success: res=>{
        console.log(res.data)
      }
    })
  },
  onSearchBookComment(){
    wx.request({
      url: 'http://localhost:3000/v1/book/1061/short_comment',
      method: 'GET',
      header: {
        Authorization: this._encode()
      },
      success: res=>{
        console.log(res.data)
      }
    })
  }
})