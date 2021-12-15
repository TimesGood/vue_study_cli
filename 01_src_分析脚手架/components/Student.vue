// 单文件组件
<template>
    <!-- 组件的结构 -->
    <div class="demo">
        <h2>学生姓名：{{student_name}}</h2>
        <h2>学生年龄：{{age}}</h2>
        <button @click="show"></button>
    </div>
</template>

<script>
    // 组件交互的相关代码
    export default{
        name:"Student",
        data(){
            return {
                student_name:"张三",
                age:18
            }
        }
    }
</script>

<style>
    /* 组件的样式 */
    .demo{
        background-color: orange;
    }
</style>