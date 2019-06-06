define(['jquery'], () => {
    class sel {
        constructor () {
        this.container = $("#sel")
        this.load().then(() => {
          // 操作sel里面的DOM
        this.menu()
        })
        }
        load () {
        return new Promise(resolve => {
          // 由于sel模块要在不同的页面使用，所以路径一定是绝对路径 /html/....
            this.container.load('/html/model/sel.html', () => {
            // 异步加载完成          
            resolve()
            })
        })
        }
        menu () {
          // 导航栏 js 动画 
          $('#header #nav a').on('mouseenter',function () { 
            $(this).css({'color':'red'})
            $('#sel ').css({'z-index':9})
            $('#sel').find('.sel').eq($(this).index()).css({'top' : 66 + "px"})
          }).on('mouseleave',function () { 
            $(this).css({'color':'#fff'})
            $('#sel ').css({'z-index':0})
          $('#sel').find('.sel').eq($(this).index()).css({'top' : -134 + "px"})
          })
          
          $('#sel .sel').on('mouseenter',function () { 
            $('#header #nav').find('a').eq($(this).index()).css({'color':'red'})
            $(this).css({'top' : 66 + "px"})
            $('#sel ').css({'z-index':9})
          }).on('mouseleave',function () { 
            $('#header #nav').find('a').eq($(this).index()).css({'color':'#fff'})
            $(this).css({'top' : -134 + "px"})
            $('#sel ').css({'z-index':0})
          })

          // 登录购物车 js 动画
          $('#header .login #login').on('mouseenter',function () { 
            $('#sel #left_border_up').css({'opacity' : 1})
            $('#sel #log-left .log-left').css({'opacity' : 1})
            $('#sel #log-left').css({'z-index':99})
            $('#sel ').css({'z-index':9})
          }).on('mouseleave',function () { 
            $('#sel #left_border_up').css({'opacity' : 0})
            $('#sel #log-left .log-left').css({'opacity' : 0})
            $('#sel #log-left').css({'z-index':0})
            $('#sel ').css({'z-index':0})
          })
            $('#sel #log-left').on('mouseenter',function () { 
              $('#sel #left_border_up').css({'opacity' : 1})
              $('#sel #log-left .log-left').css({'opacity' : 1})
              $('#sel #log-left').css({'z-index':99})
              $('#sel ').css({'z-index':9})
            }).on('mouseleave',function () { 
              $('#sel #left_border_up').css({'opacity' : 0})
              $('#sel #log-left .log-left').css({'opacity' : 0})
              $('#sel #log-left').css({'z-index':0})
              $('#sel ').css({'z-index':0})
            })                
          
          $('#header .login #gwc').on('mouseenter',function () { 
            $('#sel #right_border_up').css({'opacity' : 1})
            $('#sel #log-right .log-right').css({'opacity' : 1})
            $('#sel #log-right').css({'z-index':99})
            $('#sel ').css({'z-index':9})
          }).on('mouseleave',function () { 
            $('#sel #right_border_up').css({'opacity' : 0})
            $('#sel #log-right .log-right').css({'opacity' : 0})
            $('#sel #log-right').css({'z-index':0})
            $('#sel ').css({'z-index':0})
          })
          
          $('#sel #log-right').on('mouseenter',function(){
            $('#sel #right_border_up').css({'opacity' :1})
            $('#sel #log-right .log-right').css({'opacity' : 1})
            $('#sel #log-right').css({'z-index':99})
            $('#sel ').css({'z-index':9})
          }).on('mouseleave',function () { 
            $('#sel #right_border_up').css({'opacity' : 0})
            $('#sel #log-right .log-right').css({'opacity' : 0})
            $('#sel #log-right').css({'z-index':0})
            $('#sel ').css({'z-index':0})
          })   
          

        }
    }
    return new sel()
})