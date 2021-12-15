// 单文件组件
<template>
    <div class="student">
        <h2>学生性别：{{sex}}</h2>
        <h2>学生年龄：{{age}}</h2>
        <button @click="sendStudentName">把学生名给app</button>
        <button @click="unbind">解绑自定义事件</button>
    </div>
</template>

<script>
    export default{
        name:"Student",
        data(){
            return {
                name: "张三",
                sex: "男",
                age: 18
            }
        },
        methods: {
            sendStudentName(){
                //触发Student组件实例上的cus_event事件
                this.$emit("cus_event",this.name)
            },
            //解绑事件
            unbind(){
                //解绑自定义事件
                this.$off("cus_event")
                // this.$off(["xxx","xxx"])//解绑多个事件时
                // this.$off()//解绑所有自定义事件
            }
        }
    }
</script>

<style scoped>
    .student{
        background-color:orange;
        padding: 5px
    }
</style>