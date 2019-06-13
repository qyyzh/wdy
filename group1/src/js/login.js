define(['/libs/jquery/jquery-3.2.1.min.js'], () => {
    class Index {
        constructor () {
        this.hot()
        }
        hot () {
            console.log(0)      
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
        
    }
    new Index() 
})
