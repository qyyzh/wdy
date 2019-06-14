define(['jquery'], () => {
  require(['template','url', 'header', 'footer','sel','sidebar'], (template,url) => {
    class sel {
      constructor () {
      this.Sel()
      this.container = $("#sel")
      this.load().then(() => {
        // 操作sel里面的DOM
      this.menu()
      this.gwc()
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
            $('.fr').css({'top' : 66 + "px"})
          }).on('mouseleave',function () { 
            $(this).css({'color':'#fff'})
            $('#sel ').css({'z-index':0})
            $('#sel').find('.sel').eq($(this).index()).css({'top' : -174 + "px"})
            $('.fr').css({'top' : -174 + "px"})
          })
          
          $('#sel .sel').on('mouseenter',function () { 
            $('#header #nav').find('a').eq($(this).index()).css({'color':'red'})
            $(this).css({'top' : 66 + "px"})         
            $('#sel ').css({'z-index':9})
            $('.fr').css({'top' : 66 + "px"})
          }).on('mouseleave',function () { 
            $('#header #nav').find('a').eq($(this).index()).css({'color':'#fff'})
            $(this).css({'top' : -174 + "px"})
            $('.fr').css({'top' : -174 + "px" })
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
      Sel(){
          $.get(url.baseUrl + '/hot/get',resp =>{
            if(resp.res_code === 200) {
              this.pro(resp.res_pro)
                                  
            }
          })
      }
      pro(resPro){
          let html2 = template('select2-product', {
            pros: resPro.pro
          })
          $("#select2").html(html2)

          let html3 = template('select3-product', {
            pros: resPro.pro
          })
          $("#select3").html(html3)

          let html4 = template('select4-product', {
            pros: resPro.pro
          })
          $("#select4").html(html4)

          let html5 = template('select5-product', {
            pros: resPro.pro
          })
          $("#select5").html(html5)
          
          let html9 = template('select9-product', {
            pros: resPro.pro
          })
          $("#select9").html(html9)
      }

      gwc(){
        let cartList = JSON.parse(localStorage.getItem('cart'))
        if (cartList.length>0) {
          $('#gwc').css({'color':'yellow'})
          $('.log-right span').css({'color':'yellow'})
          $('.you').css({'display':'block'})
          $('.kong').css({'display':'none'})
        }else{
          $('.you').css({'display':'none'})
          $('.kong').css({'display':'block'})
          $('#gwc').css({'color':'#fff'})
          $('.log-right span').css({'color':'rgb(148,148,148)'})
        }
      }
      
  }
  return new sel()
  })
    
})