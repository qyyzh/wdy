// 一个页面对应一个js，这个js里要依赖别的模块
require(["./config"], () => {
  // 引入config以后就有短名称了
    require(["url","cookie"], (url) => {
        // 写逻辑
        class Index {
            constructor () {
            this.hot()
            this.log()
            }
            hot () {   
                $('#zh').on('click' ,function(){
                    console.log(1)
                    $('#ac-DengLu').css({'display':"block"})
                    $('#vc-DengLu').css({'display':"none"})
                })
    
                $('#sj').on('click' ,function(){
                    console.log(2)
                    $('#vc-DengLu').css({'display':"block"})
                    $('#ac-DengLu').css({'display':"none"})
                })
            }
            log(){
                $('#login_btn_id').on('click',function(){
                    let name = JSON.parse($.cookie('name'))
                    console.log(name)
                    if(name){                       
                        let isPhone = name.some((e) => {
                            return e.phone === $('#inp1').val()
                        })
                        if(isPhone){
                            let isCook = name.some((e) => {
                                return e === $('#inp1').val(),$('#password').val()
                            })
                            if(isCook){
                                if(confirm('登录成功，快去购买')){
                                    window.location.href = 'http://localhost:1234/html/shop.html'
                                }
                            }else{
                                alert('你输入的密码不正确，请重新输入')
                            }
                        }else{
                            if(confirm('你还没注册，快去注册')){
                                window.location.href = 'http://localhost:1234/html/reg.html'
                            }
                        }
                    }else{
                        if(confirm('你还没注册，快去注册')){
                            window.location.href = 'http://localhost:1234/html/reg.html'
                        }
                    }
                })
            }
            
        }
        new Index();
    })
})
