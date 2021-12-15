# 笔记
## 脚手架文件结构：
    |———node_modules
    |———public
    |   |———favicon.ico：页签图标
    |   |———index.html：主页面
    |———src
    |   |———assets：存放静态资源
    |   |   |———logo.png
    |   |———component：存放组件
    |   |   |———HelloWorlk.vue
    |   |———App.vue：汇总所有组件
    |   |———main.js：程序入口文件
    |———.gitignoree：git版本管理忽略的配置
    |———babel.config.js：babel的配置文件
    |———package.json：应用包配置文件
    |———README.md：应用描述文件
    |———package-lock.json：包版本控制文件

## ref属性：
    1.被用来给元素或子组件注册引用信息（id替代品）
    2.应用在html标签上获取的是真实DOM元素，应用在组件上获取的是组件实例对象

## 配置项props：
    功能：让组件接收组件使用者传递过来的数据
        （1）传递参数：
            <Demo name="xxx"/>
        （2）接收数据：
            第一种方式（只接受）：
                props:["name"]
            第二种方式（限制类型）
                props:{
                    name:String
                }
            第三种方式（限制类型、限制必要性、指定默认值）
                props:{
                    name:{
                        type:String, //类型
                        required:true, //必要性
                        default:"某某" //默认值
                    }
                }
    备注：props是只读的，Vue底层会监测你对props的修改，如果进行了修改就会发出警告，若业务需求确实需要修改，那么请复制props中的内容到data中，然后修改data中的内容

## mixin（混入）
    功能：可以把多个组件共用的配置项提取成一个混入对象
    使用方式：
        第一步定义混合，例如：
            {
                data(){...}
                methods:{...}
                ...
            }
        第二步使用混入，例如：
            （1）全局混入：Vue.mixin(xxx)
            （2）局部混入：mixins:["xxx"]
## 插件
    功能：用于增强Vue
        本质：包含install方法的一个对象，install的第一个参数是Vue，第二个以后的参数是插件使用者传递的数据
        定义插件：
            install = function(Vue,options) {
                //1.添加全局过滤器
                Vue.filter(...)
                //2.添加全局指令
                Vue.directive(...)
                //3.配置全局混入
                Vue.mixin(...)

                //4.添加实例方法
                Vue.prototype.$myMethod = function() {...}
                Vue.prototype.$myProperty = xxx
            }
        使用插件：Vue.use()
## scoped样式
    作用：让样式在局部生效，防止冲突
    写法：<style scoped></style>
## webStorage存储到浏览器中数据
    1、存储内容大小一般支持5MB左右（不同浏览器可能还不一样）
    2、浏览器端通过Window.sessionStorage和Window.localStorage属性来实现本地存储
    3、相关API：
        xxxStorage.setItem("key","value")
            该方法通过键值对储存数据，如果键名存在，则更新其对应值
        xxxStorage.getItem("key")
            该方法通过键名返回对应键名的值
        xxxStorage.removeItem("key")
            该方法通过键名删除对应键值对
        xxxStorage.clear()
            该方法会清空存储中所有数据
    4、Window.sessionStorage与Window.localStorage的区别
        1、SessionStorage存储的内容会随着浏览器窗口关闭而消息，而LocalStorage存储的内容，需要手动清除才会消失。
        2、两个API如果对应的值获取不到时，默认返回null

## 组件的自定义事件
    1、一种组件键通信的方式，适用于子组件===>父组件
    2、使用场景：A是父组件，B是子组件，name就要在A中给B绑定自定义事件（事件的回调在A中）
    3、绑定自定义事件
        1、第一种方式，在父组件中<Demo @cus_event="test"/> 或 <Demo v-on:cus_event="test"/>
        2、第二种方式，在父组件中<Demo ref="demo"/> 然后在mounted()生命周期回调函数中this.$refs.xxx.$on("cus_event",this.test)
        3、若只想触发一次，可使用修饰符$once
    4、触发自定义事件：this.$emit("cus_event",参数)
    5、解绑自定义事件：this.$off("cus_event")

## 全局事件总线（GlobalEventBus）
    1、一种组件之间通信的方式，适用于任意组件间的通信
    2、安装全局事件总线：
        new Vue({
            ...
            brforeCreate() {
                Vue.prototype.$bus = this //安装全局事件总线，$bus就是当前应用的vm
            },
            ...
        })
    3、使用全局事件总线：
        (1)接受数据，A组件想接收数据，则在A组件中给$bud绑定自定义事件，事件的回调留在A组件自身
        methods() {
            demo(data) {...}
        },
        mounted() {
            this.$bus.$on("xxx",demo)
        }
        （2）提供数据：this.$bus.$emit("xxx",demo)
    4、最好在beforeDestroy钩子中用$off解绑当前组件绑定的自定义事件
    5、传递数据使用场景：
        当父给子传递数据时，使用props即可
        当子给父传递数据时，使用props/自定义事件即可
        当两组件没有关系时，就使用全局事件总线

## 消息订阅与发布
    1、一种组件间通讯的方式，适用于任意组件间通信
    2、使用步骤：
        （1）安装pubsub：npm i pubsub-js
        （2）引入import pubsub from "pubsub-js"
        （3）接收数据：A组件想要接收数据，则在A组件中订阅消息，订阅的回调留在A组件自身
            methods(){
                demo(message,data){...}
            }
            ...
            mounted() {
                this.pid = pubsub.subscribe("xxx",this.demo)//订阅消息
            }
        （4）提供数据：pubsub.publish("xxx",数据)
        （5）最好在beforeDestroy钩子中，用pubsub.unsubscribe(pid)取消订阅
    注：消息订阅与发布在Vue中用的不多，因为Vue已经有了全局事件总线

    