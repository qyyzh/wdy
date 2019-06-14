// 一个页面对应一个js，这个js里要依赖别的模块
require(['./config'], () => {
    // 引入config以后就有短名称了
    require(['template','url', 'header', 'footer','sel','cookie','sidebar'], (template,url) => {
        class Index {
            constructor () {
                this.gwc()
                this.del() 
            }                       
            gwc(){                                              
                let goods = JSON.parse(localStorage.getItem('cart'))                  
                let html = template('tbo', {
                    pro : goods
                })
                $('.tbody').html(html)                               
                this.cal()                         
                
            }
            del(){
                $('.tbody').on('click',(e)=>{
                    let tr = e.target.parentNode.parentNode
                    switch(e.target.className){
                        case 'cart-close close' : this.delClick(tr); break;
                        case 'table-add' : this.add(e); break;
                        case 'table-cut' : this.cut(e); break;
                    }
                })
            }
            delClick(tr){
                if(confirm("确定要删除？")){
                    let goods = JSON.parse(localStorage.getItem('cart'))               
                    goods.splice($(goods).eq($(this).index()),1)
                    tr.remove()
                    localStorage.setItem('cart', JSON.stringify(goods))
                    this.cal()
                    this.sl()
                    this.gw()
                }
            }
            sl(){
                let goods = JSON.parse(localStorage.getItem('cart'))
                let sums = 0
                $(goods).each(function (index, element) {
                    sums ++
                })
                $('.shopCarTip').html(sums)
            }
            gw(){
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
            add(e){
                let  num = Number($(e.target.parentNode).find("input").val())
                num++
                $(e.target.parentNode).find("input").val(num)
                let pri = Number($(e.target.parentNode.parentNode.parentNode).children().eq(2).html().slice(1))
                let numb = num * pri
                $(e.target.parentNode.parentNode).next().html('¥'+numb)
                this.cal()
            }
            cut(e){
                let  num = Number($(e.target.parentNode).find("input").val())              
                num--
                if(num<1){
                    num = 1
                }{
                    $(e.target.parentNode).find("input").val(num)
                    let pri = Number($(e.target.parentNode.parentNode.parentNode).children().eq(2).html().slice(1))
                    let numb = num * pri
                    $(e.target.parentNode.parentNode).next().html('¥'+numb)
                    this.cal()
                }
            }


            cal(){
                let sums = 0
                $('.sum').each(function (index, element) {
                    sums += Number($(element).html().slice(1))
                })
                $('.sums').html('¥'+sums)
            }
        }
        new Index() 
    })
})