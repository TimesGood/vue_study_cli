// 单文件组件
<template>
    <!-- 组件的结构 -->
    <div >
        <h2>学生姓名：{{name}}</h2>
        <h2>学生性别：{{sex}}</h2>
        <h2>学生年龄：{{age}}</h2>
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
        }
    }
</script>

<style>

</style>