// 单文件组件
<template>
    <!-- 组件的结构 -->
    <div class="demo">
        <h2>学校名称：{{school_name}}</h2>
        <h2>学校地址：{{address}}</h2>
        <button @click="show"></button>
    </div>
</template>

<script>
    // 组件交互的相关代码
    export default{
        name:"School",
        data(){
            return {
                school_name:"社会",
                address:"地球"
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