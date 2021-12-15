
import Vue from "vue"
import App from "./App.vue"
import {mixin} from "./mixin.js"
//关闭Vue生产提示
Vue.config.productionTip = false
Vue.mixin[mixin]//全局混入

new Vue({
    el:"#app",
    render: h => h(App)
})
