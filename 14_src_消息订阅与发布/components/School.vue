// 单文件组件
<template>
    <!-- 组件的结构 -->
    <div class="school">
        <h2>学校名称：{{name}}</h2>
        <h2>学校地址：{{address}}</h2>
    </div>
</template>

<script>
    //引入消息订阅库pubsub-js，需要自己命令安装
    import pubsub from "pubsub-js"
    export default{
        name:"School",
        data(){
            return {
                name:"社会",
                address:"地球"
            }
        },
        methods: {
            demo(message,data) {
                console.log("有人发布了hello消息，hello消息的回调执行了",message,data)
            }
        },
        mounted() {
            //订阅消息
            //传递过来的消息有两个值，第一个值为消息名，第二才是参数
            //最好写箭头函数，否则方法里面的this不会指向当前vc对象
            // this.pubId = pubsub.subscribe("hello",(message,data) => {
            //     console.log("有人发布了hello消息，hello消息的回调执行了",message,data)

            // })
            //当然这样写更好了
            this.pubId = pubsub.subscribe("hello",this.demo)
        },
        beforeDestroy() {
            //取消订阅
            pubsub.unsubscribe(this.pubId)
        }
    }
</script>

<style scoped>
    .school{
        background-color: skyblue;
        padding: 5px;
    }
</style>