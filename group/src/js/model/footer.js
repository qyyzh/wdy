define(['jquery'], () => {
    class footer {
        constructor () {
        this.container = $("#footer")
        this.load().then(() => {
          // 操作footer里面的DOM
        this.search()
        })
        }
        load () {
        return new Promise(resolve => {
          // 由于footer模块要在不同的页面使用，所以路径一定是绝对路径 /html/....
            this.container.load('/html/model/footer.html', () => {
            // 异步加载完成
            resolve()
            })
        })
        }
        search () {

        }
    }
    return new footer()
})