define(['jquery'], () => {
    require(['template','url', 'header', 'footer','sel','sidebar'], (template,url) => {
    class sidebar {
        constructor () {
        this.container = $("#sidebar")
        this.load().then(() => {
          // 操作sel里面的DOM
        this.menu()
        this.sl()
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
                if($(window).scrollTop()>800){
                    $('.nb-et-top a').css({'display':'block'})
                }else{
                    $('.nb-et-top a').css({'display':'none'})
                }
            } )
            $('.nb-et-top a').click(function () { 
                var start = document.documentElement.scrollTop || document.body.scrollTop;		
                    var timer = setInterval(function(){
                        var speed = Math.floor(-start/10);
                        start += speed
                        window.scrollTo(0,start)
                        if(start == 0) clearInterval(timer);				
                    },50) 
            })          
        }
        sl(){
            let goods = JSON.parse(localStorage.getItem('cart'))
            let sums = 0
            $(goods).each(function (index, element) {
                sums ++
            })
            $('.shopCarTip').html(sums)
        }
        
    }
    return new sidebar()
    })
})