const getList = (author, keyword) => {
  return [{
    id: '1',
    title: 'titleA',
    content: 'contentA',
    createTime: '3212312312',
    author: 'rj'
  }]
}

const newBlog = (blogData = {}) => {
  return
}

module.exports = {
  getList,
  newBlog
}