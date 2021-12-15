
import Vue from "vue"
import App from "./App.vue"

//关闭Vue生产提示
Vue.config.productionTip = false

new Vue({
    render: h => h(App)
}).$mount("#app")

// 解读
// new Vue({
//     el:"#app",
//     //模板解析器，将App组件放入容器中。
//     //注，当引入的vue不是完整版时，必须借助render函数渲染组件，完整的vue自带模板解析器，但解析器体积比较大，当打包上线时，
//     //就不需要了，所以开发时就用不完整的，解析器引入就行
//     render: h => h(App)
//     //render: h => h(App)其实是以下写法
//     // render(createElement) {
//     //     return createElement("h1","你好啊")
//     // }
// })
/*
    关于不同版本的Vue
        1.vue.js与vue.runtime.xxx.js区别
            （1）vue.js是完整版的Vue，包含：核心功能+模板解析器
            （2）vue.runtime.xxx.js是运行版Vue，只包含核心功能，没有模板解析器
        2.因为vue.runtime.xxx.js没有模板解析器，所以不能使用template配置项，需要使用
        render函数接受到createElement去指定解析内容
*/
