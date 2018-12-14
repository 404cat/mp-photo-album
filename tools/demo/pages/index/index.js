const data = require('./data.js')

const list = data.data.picDoList.map((item, index) => ({
  src: item.url,
  previewSrc: `${item.url}_1280`,
  listSrc: `${item.url}_200`,
  desc: `姓名：${index}\r\n律所：xxxxxxxxxxxxx\r\n职务：xxxxxx`
}))

Page({
  data: {
    list,
  }
})
