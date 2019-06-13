define(['jquery'], () => {
    require(['template','url', 'header', 'footer','sel','sidebar'], (template,url) => {
    class sidebar {
        constructor () {
        this.container = $("#sidebar")
        this.load().then(() => {
          // 操作sel里面的DOM
        this.menu()
        
        })
        }
        load () {
        return new Promise(resolve => {
          // 由于sel模块要在不同的页面使用，所以路径一定是绝对路径 /html/....
            this.container.load('/html/model/sidebar.html', () => {
            // 异步加载完成          
            resolve()
            })
        })
        }
        menu () {
            
            $("#side_ul li").hover(
                function () {
                    $('.ck').eq($(this).index()).css({'display':"block"})
                },
                function () {
                    $('.ck').eq($(this).index()).css({'display':"none"})
                }
            )
            $(window).scroll( function() {
                console.log($(window).scrollTop())
                if($(window).scrollTop()>800){
                    $('.nb-et-top a').css({'display':'block'})
                }else{
                    $('.nb-et-top a').css({'display':'none'})
                }
            } )
            $('.nb-et-top a').click(function () { 
                // $(window).animate({ 
                //     scrollTop : 0
                // }, 1000 )
                $(window).scrollTop(0)
            })
        }
        
    }
    return new sidebar()
    })
})