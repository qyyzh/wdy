// 一个页面对应一个js，这个js里要依赖别的模块
require(['./config'], () => {
  // 引入config以后就有短名称了
  require(['template','url', 'header', 'footer','sel'], (template,url) => {
    // 写首页逻辑
    class Index {
      constructor () {
        this.hot()
            
      }
//轮播图
      Carousel () {
        let index = 0
        let $li = $('#Carousel-ul li')
        $li.width($(window).width())
        $('#Carousel-ul').append($li.eq(0).clone()).width($li.width()*($li.length+1));
        $li.each(function (index) {
            $('<li>').addClass(index === 0 ? "ac" : "").appendTo($('#Carousel-ol'));          
        });
        $('#Carousel-ol').css({left:($(window).width()-$('#Carousel-ol').width())/2})
        $('#Carousel-ol li').on('click', function () {
            index = $(this).index()
            $(this).addClass('ac').siblings().removeClass('ac')
           $('#Carousel-ul').stop().animate({left: -index * $li.width()}, 1000)
        })
    // 向后
        $('#a-right').on('click', function () {
          if(++index === $li.length) {
            // 移动到追加那张图,按钮应该回到0得位置
            $('#Carousel-ol li').eq(0).addClass('ac').siblings().removeClass('ac')
            // 移动到追加那张图，然后瞬间回到第0张
            $('#Carousel-ul').stop().animate({left: -index * $li.width()}, 1000, function () {
              // 移动结束了,瞬间拉回0得位置
              $('#Carousel-ul').css({left: 0})
              index = 0
            })
          } else {
            // 正常按照index移动
            $('#Carousel-ul').stop().animate({left: -index * $li.width()}, 1000)
            $('#Carousel-ol li').eq(index).addClass('ac').siblings().removeClass('ac')
          }        
        })
    // 向前
        $('#a-left').on('click', function () {
          if(--index < 0) {
            // 超出范围了，所以先拉到追加那一张，再往前移动一张
            $('#Carousel-ul').css({left: -$li.length * $li.width()})
            // index拉到最后一张
            index = $li.length - 1
          }
          // 按照index来移动和改变按钮样式
          $('#Carousel-ul').stop().animate({left: -index * $li.width()}, 1000)
          $('#Carousel-ol li').eq(index).addClass('ac').siblings().removeClass('ac')
        })

        let timer = null;
        $('#Carousel').hover(
          function () {
            $('#Carousel span').css({'display':'block'})
            clearInterval(timer)
          }, 
          (function auto () {
            $('#Carousel span').css({'display':'none'})
            timer = setInterval(function () {
              $('#a-right').trigger('click')
              
            }, 2500)
            return auto;
          })()
        )
      }

      hot () {      
        $.get(url.baseUrl + '/hot/get',resp =>{
          console.log(resp)
          if(resp.res_code === 200) {
            this.CarouselHot(resp.res_Carousel)
            this.FeaturedHot(resp.res_Featured)          
          }
        })
      }
      CarouselHot(resCarousel){       
        // 第一个参数是模板的id，第二个参数是这个模板里面需要的数据
        let html = template('Carousel-ul-li', {
          Carousel: resCarousel.Carousel
        })
        // console.log(html)
        $("#Carousel").html(html)
        this.Carousel()   
      }
      FeaturedHot(resFeatured){
        let html = template('Featured-ul-li', {
          Featured: resFeatured.Featured
        })
        $("#Featured").html(html)
      }

    }

    new Index()

  })
})