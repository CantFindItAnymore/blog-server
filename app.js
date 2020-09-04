const handleBlogRouter = require('./src/router/blog')
const handleUserRouter = require('./src/router/user')
const querystring = require('querystring')
const { resolve } = require('path')



const serverHandle = (req, res) => {
  //返回格式
  res.setHeader('Content-type', 'application/json')

  //解析get参数
  req.query = querystring.parse(req.url.split('?')[1])

  //解析post参数
  _getPostData(req)
    .then(body => {
      req.body = body

      //处理blog路由
      const blogData = handleBlogRouter(req)
      if (blogData) {
        res.end(JSON.stringify(blogData))
        return
      }

      //处理user路由
      // const userData = handleUserRouter(req, res)
      // if (userData) {
      //   res.end(JSON.stringify(userData))
      //   return
      // }

      //处理404
      res.writeHead(404, {
        'Content-type': 'text-plain'
      })
      res.write('404 NOT FOUND \n')
      res.end()
    })

}

//处理post请求的私有函数
const _getPostData = (req) => {
  const promise = new Promise((resolve, reject) => {
    if (req.method !== 'POST' || res.headers['Content-type'] !== 'application/json') {
      resolve()
      return
    }

    let postData = ''
    req.on('data', chunk => {
      postData += chunk.toString()
    })

    req.on('end', () => {
      if (!postData) {
        resolve()
        return
      }
      resolve(JSON.parse(postData))
    })
  })

  return promise
}

module.exports = serverHandle