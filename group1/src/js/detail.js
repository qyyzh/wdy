// 一个页面对应一个js，这个js里要依赖别的模块
require(['./config'], () => {
    // 引入config以后就有短名称了
    require(['template','url', 'header', 'footer','sel','sidebar'], (template,url) => {
      // 写逻辑
        class Index {
        constructor () {
        this.hot()
        this.sum()
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
        sum(){          
          let dz = Number(location.search.split('=')[1])
          console.log(dz)
          $.get(url.baseUrl + '/hot/get',resp =>{
            console.log(resp)
            if(resp.res_code === 200) {
              switch(dz){
                case 1 : this.sumImg(resp.res_sum1); break
                case 2 : this.sumImg(resp.res_sum2); break
                case 3 : this.sumImg(resp.res_sum3); break
                case 4 : this.sumImg(resp.res_sum4); break
                case 5 : this.sumImg(resp.res_sum5); break
                case 6 : this.sumImg(resp.res_sum6); break
                case 7 : this.sumImg(resp.res_sum7); break               
              }                                               
            }
          })
        }
        sumImg(resSum){
          // 第一个参数是模板的id，第二个参数是这个模板里面需要的数据
        let html1 = template('w120', {
          tit: resSum.tit
        })
        $("#w12").html(html1)
        let html2 = template('sum-img', {
          sum: resSum.sum
        })
        $("#summarize").html(html2)       
        }       
        
        }
        new Index() 
    })
})