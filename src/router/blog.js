const { getList, newBlog } = require('../controller/blog')
const { SuccessModel } = require('../model/resModel')

const handleBlogRouter = req => {
	const method = req.method
	const url = req.url
	const path = url.split('?')[0]

	//获取博客列表
	if (method === 'GET' && path === '/api/blog/list') {

		const { author = '', keyword = '' } = req.query
		const listData = getList(author, keyword)
		return new SuccessModel(listData)

    // getList(author, keyword)
    //   .then(listData => {
    //     return new SuccessModel(listData)
    //   })
  }

  if (method === 'POST' && path === '/api/blog/new') {
    const blogData = req.body
    const data = newBlog = newBlog(blogData)
    return new SuccessModel('添加博客成功')
  }
}

module.exports = handleBlogRouter
