// 单文件组件
<template>
    <!-- 组件的结构 -->
    <div class="school">
        <h2>学校名称：{{name}}</h2>
        <h2>学校地址：{{address}}</h2>
    </div>
</template>

<script>
    export default{
        name:"School",
        data(){
            return {
                name:"社会",
                address:"地球"
            }
        },
        mounted() {
            //在全局事件总线上绑定事件hello
            this.$bus.$on("hello",(data) => {
                console.log("我是Scholl组件，从全局事件总线收到了数据",data)
            })
        },
        beforeDestroy() {
            //记得在组件销毁之前，解绑事件
            this.$bus.$off("hello")
        }
    }
</script>

<style scoped>
    .school{
        background-color: skyblue;
        padding: 5px;
    }
</style>