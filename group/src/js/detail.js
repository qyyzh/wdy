// 一个页面对应一个js，这个js里要依赖别的模块
require(['./config'], () => {
    // 引入config以后就有短名称了
    require(['template','url', 'header', 'footer','sel'], (template,url) => {
      // 写逻辑
        class Index {
        constructor () {
        this.hot()
        }
        hot () {                        
          $('#sub-menu li').hover(function () {
              $(this).addClass('active')       
            }, function () {            
              $(this).removeClass('active')                           
            }
          )
          $(window).scroll( function() {
              $('.sub-nav').css({'top': 0})
              if($(window).scrollTop()<33){
              $('.sub-nav').css({'top': 66})
              }
              
            } )
        }
        
        }
        new Index() 
    })
})