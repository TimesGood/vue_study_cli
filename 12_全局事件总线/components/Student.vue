// 单文件组件
<template>
    <div class="student">
        <h2>学生性别：{{sex}}</h2>
        <h2>学生年龄：{{age}}</h2>
        <button @click="sendStudentName">把学生名给全局事件总线</button>
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
                //触发全局事件总线上的hello事件
                this.$bus.$emit("hello",this.name)
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