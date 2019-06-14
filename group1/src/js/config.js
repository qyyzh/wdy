require.config({
  baseUrl: '/',
  paths: {
    jquery: 'libs/jquery/jquery-3.2.1.min',
    header: 'js/model/header',
    footer: 'js/model/footer',
    sel:'js/model/sel',
    sidebar : 'js/model/sidebar',
    url: 'js/model/url',
    template: 'libs/art-template/template-web',
    cookie: 'libs/jquery-plugins/jquery.cookie',
    zoom: 'libs/jquery-plugins/jquery.elevatezoom',
    fly: 'libs/jquery-plugins/jquery.fly'
  },
  // 垫片，加载一些不满足AMD规范但是又依赖于别的模块
  // cookie插件不满足AMD并且依赖于jquery
  shim: {
    cookie: {
      deps: ['jquery']
    },
    zoom : {
      deps: ['jquery']
    },
    fly: {
      deps: ['jquery']
    }
  }
})