const proxy = require('http-proxy-middleware')

module.exports = function(app) {
  app.use(proxy('/api', { 
    target: 'http://api.15.zyelu.com' ,
    secure: false,
    changeOrigin: true,
    pathRewrite: {
    "^/api": "/"
    },
  }))
}
