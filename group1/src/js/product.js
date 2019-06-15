// 一个页面对应一个js，这个js里要依赖别的模块
require(["./config"], () => {
  // 引入config以后就有短名称了
    require(["template", "url", "header", "footer", "sel", "cookie", "zoom",'sidebar','fly'], (template,url) => {
        // 写逻辑
        class Index {
            constructor() {                            
                this.onZoom()           
            }
            onZoom(){
                let dz = Number(location.search.split('=')[1])
                console.log(dz)
                $.get(url.baseUrl + '/hot/get',resp =>{
                    console.log(resp)
                    if(resp.res_code === 200) {
                        switch(dz){
                            case 1 : this.sumImg(resp.res_zoom1); break
                            case 2 : this.sumImg(resp.res_zoom2); break
                            case 3 : this.sumImg(resp.res_zoom3); break
                            case 4 : this.sumImg(resp.res_zoom4); break
                            case 5 : this.sumImg(resp.res_zoom5); break
                            case 6 : this.sumImg(resp.res_zoom6); break
                            case 7 : this.sumImg(resp.res_zoom7); break               
                        }                                               
                    }
                })                                  
            }
            sumImg(resZoom){
                // 第一个参数是模板的id，第二个参数是这个模板里面需要的数据
                let html1 = template('w120', {
                    pro: resZoom.pro
                })
                $("#w12").html(html1)
                let html2 = template('w100', {
                    pro: resZoom.pro
                })
                $("#w10").html(html2)
                let html3 = template('w110', {
                    pro: resZoom.pro
                })
                $("#zoom-left").html(html3)
                this.zoom()
                this.buy_number()
                this.init()
                this.addCart () 
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
            zoom(){           
                $('.zoom-img').elevateZoom({
                    gallery : 'product-img',
                    cursor : 'pointer',          
                })
            }

            init () {
                // 根据location的query 的id值去请求接口，拿到详情数据，渲染页面
                // 模拟ajax成功拿到数据
                // 由于咱们是rap2模拟的数据，他不能处理请求时携带的参数，所以接口返回的id是随机的不能用的，
                // 所以我们需要手动处理一下这个id，把他赋值为location的id
                // 真实接口不需要这一步（因为真实接口返回的id就是location的id）
                this.detail = {
                    id: Number(location.search.slice(4)),
                    title: $('.main_right_p span').html(),
                    price: Number($('.PriceContent span').text().slice(1))
                }
                
            }
            addCart () {
                $(".addShopCar").on('click', () => {
                    // 先获取当前数据要加入购物车的数量
                    this.detail = {
                        ...this.detail,
                        num: Number($('.totle').html())
                    }
                    // 把数据存localStorage
                    // 先取出来，判断是否为空
                    let cartList = localStorage.getItem('cart')
                    if (cartList) {
                        // 购物车已经存在数据了
                        cartList = JSON.parse(cartList)

                        // 判断cartList有没有当前数据
                        // i就是cartList用来存已经存在的这条商品的下标
                        let i = -1;
                        let isExist = cartList.some((cart, index) => {
                            // 每遍历一次i的值都重新赋值为当前下标，直到找到了这条商品，some结束，这个时候i的值就是当前商品这个下标
                            i = index
                            return cart.id === this.detail.id
                        })
                        if (isExist) {
                            // 这条商品已经加过购物车了
                            // 数量累加
                            cartList[i].num += this.detail.num
                        } else {
                            // 这条商品还没有加过购物车
                            cartList.push(this.detail)
                        }
                        // 逻辑处理完成以后把cartList重新存localStorage里，覆盖之前的
                        localStorage.setItem('cart', JSON.stringify(cartList))
                    }else{
                        // 没有存过，购物车为空
                        // var arr = [];
                        // arr[0] = this.detail
                        // let str = JSON.stringify(arr)
                        // localStorage.setItem('cart', str)
                        localStorage.setItem('cart', JSON.stringify([this.detail]))
                    }
                    console.log($(".addShopCar").offset().left+150)
                    console.log($(".addShopCar").offset())
                    console.log($(".addShopCar").offset().top-$(window).scrollTop())
                    // 抛物线
                    $('<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1560577210449&di=76533a0fa88487401b8cf33e9865ec17&imgtype=0&src=http%3A%2F%2Fku.90sjimg.com%2Felement_origin_min_pic%2F16%2F11%2F25%2Fa90382be7e9f9902e290afd35362e152.jpg" style="width:20px;height:20px;border-radius: 50%;">')
                    .fly({
                        start : {left:$(".addShopCar").offset().left +150,top:$(".addShopCar").offset().top-$(window).scrollTop()},
                        end : {left:$(".side").position().left + 20,top:$(".side").position().top +20},
                        // autoPlay: true, //是否直接运动,默认true
                        speed: 1.1, //越大越快，默认1.2
                        // vertex_Rtop：100, //运动轨迹最高点top值，默认20
                        onEnd: function(){
                            
                        // this.destroy()
                        } //结束回调
                    })
                    this.sl()
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
        new Index();
    });
});
