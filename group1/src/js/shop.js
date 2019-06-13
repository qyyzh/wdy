// 一个页面对应一个js，这个js里要依赖别的模块
require(['./config'], () => {
    // 引入config以后就有短名称了
    require(['template','url', 'header', 'footer','sel','cookie','sidebar'], (template,url) => {
        class Index {
        constructor () {
            this.hot()
        
        }                       
        hot(){
            console.log(1)
        }
        
        }
        new Index() 
    })
})