// 一个页面对应一个js，这个js里要依赖别的模块
require(["./config"], () => {
  // 引入config以后就有短名称了
    require(["template", "url", "header", "footer", "sel", "cookie", "zoom",'sidebar'], (template,url) => {
        // 写逻辑
        class Index {
        constructor() {
            this.sp();
            this.zoom()
            this.buy_number()
        }
        zoom(){
            this.onZoom()
            $('.zoom-img').elevateZoom({
                gallery : 'product-img',
                cursor : 'pointer',          
            })
        }
        onZoom(){
            
            $('#img_thumb li').on("click", function(){
                console.log(2)
                $(this).addClass("selected").siblings().removeClass("selected");
            })
            // console.log($('#img_thumb li'))
        }
        
        sp() {
            $.get(url.baseUrl + "/hot/get", resp => {
            if (resp.res_code === 200) {
                this.zoomImg(resp.res_zoom);
            }
            });
        }
        zoomImg(resZoom) {
            // let html = template("left-zoom", {
            //   zoom: resZoom.img
            // });
            // $("#zoom-left").html(html);
            // console.dir($)
        }

        buy_number(){
            let num = Number($('.totle').html())      
            $('.minus').on("click", function(){
                num--
                if(num<1){
                    num = 1
                }else{
                    $('.totle').html(num) 
                }                              
            })
            $('.add').on("click", function(){
                num++
                $('.totle').html(num) 
            })
            
            
            
        }
        }
        new Index();
    });
});
