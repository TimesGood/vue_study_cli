// 单文件组件
<template>
    <!-- 组件的结构 -->
    <div class="demo">
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
        }
    }
</script>

<style>
</style>