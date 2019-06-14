// 一个页面对应一个js，这个js里要依赖别的模块
require(["./config"], () => {
  // 引入config以后就有短名称了
    require(["url","cookie"], (url) => {
        // 写逻辑
        class Index {
            constructor() {                            
                this.hot()          
            }
            hot () {     
                $('#reg_btn_id').on('click',function(){
                    if($('#mobile').val()===""){
                        $('#phone_error').css({'display':'block'})
                    }else{
                        $('#phone_error').css({'display':'none'})
                    }
    
                    if($('#passwordMobile').val()===""){
                        $('#password_error').css({'display':'block'})
                    }else{
                        $('#password_error').css({'display':'none'})
                    }
                    if(!$('#mobile').val()=="" && !$('#passwordMobile').val()==""){
                        let name = $.cookie('name')
                        if(name){
                            let arr = JSON.parse($.cookie('name'))
                            let isCook = arr.some((e) => {
                                return e.phone === $('#mobile').val()
                            })
                            if(isCook){
                                alert('该用户已经被注册')
                            }else{
                                arr.push({'phone':$('#mobile').val(),'pass': $('#passwordMobile').val()})
                                $.cookie('name',JSON.stringify(arr),{path:'/',expires:10})
                                if(confirm('注册成功，快去登录')){
                                    window.location.href = 'http://localhost:1234/html/login.html'
                                }
                            }                       
                        }else{
                            $.cookie('name',JSON.stringify([{'phone':$('#mobile').val(),'pass': $('#passwordMobile').val()}]),{path:'/',expires:10})
                            if(confirm('注册成功，快去登录')){
                                window.location.href = 'http://localhost:1234/html/login.html'
                            }
                        }
                    }
                })
            }
        }
        new Index();
    })
})
