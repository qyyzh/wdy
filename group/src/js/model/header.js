define(['jquery'], () => {
  class Header {
    constructor () {
      this.container = $("#header")
      this.load().then(() => {
        // 操作header里面的DOM
        this.search()
      })
    }

    load () {
      return new Promise(resolve => {
        // 由于header模块要在不同的页面使用，所以路径一定是绝对路径 /html/....
        this.container.load('/html/model/header.html', () => {
          // 异步加载完成
          resolve()
        })
      })
    }

    search () {     
        $(".login a").on('mouseenter',function () { 
            $(this).css({'background':'red'})

            }).on('mouseleave',function () { 
            $(this).css({'background':'#282828'})

            })

    }
  }

  return new Header()
})