// 配置请求baseUrl模块
// 上线之前假接口
define(() => {
  return {
    baseUrl: 'http://rap2api.taobao.org/app/mock/178257',
    basePhpUrl: 'http://localhost'
  }
})

// 上线之后都换成真实接口
// define(() => {
//   return {
//     baseUrl: 'http://www.91porn.com/api',
//     basePhpUrl: 'http://www.91porn.com/api'
//   }
// });