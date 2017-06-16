//home.js
//获取应用实例
var app = getApp()
Page({
  data: {
    historyArray: [{
      carNum: '沪C38769',
    }, {
      carNum: '沪C38321',
    }, {
      carNum: '沪E58389'
    }],
    count: 0,
    carNum: ""
  },

  //事件处理函数
  nearestParkViewTab: function () {
    console.log('nearestParkViewTab')

  },

  carNumButtonTab: function (event) {
    console.log(event)
    this.data.carNum = event.currentTarget.id
    this.setData({
      carNum: this.data.carNum
    })
  },

  querryButtonTab: function () {
    console.log('querryButtonTab')
  },

  bindNumInput: function (event) {
    console.log(event)
    this.data.carNum = event.detail.value
    this.setData({
      carNum: this.data.carNum
    })
  },
  onLoad: function () {
    console.log('onLoad')
  }
})
