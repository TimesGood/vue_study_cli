
import Vue from "vue"
import App from "./App.vue"
//引入插件
import plugins from "./plugins.js"
//关闭Vue生产提示
Vue.config.productionTip = false

//应用插件
Vue.use(plugins)
new Vue({
    el:"#app",
    render: h => h(App)
})
