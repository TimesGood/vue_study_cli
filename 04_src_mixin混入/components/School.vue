// 单文件组件
<template>
    <!-- 组件的结构 -->
    <div class="demo">
        <h2 @click="showName">学校名称：{{name}}</h2>
        <h2>学校地址：{{address}}</h2>
    </div>
</template>

<script>
    //引入混合(局部混合)
    // import {mixin} from "../mixin.js"
    // 组件交互的相关代码
    export default{
        name:"School",
        data(){
            return {
                name:"社会",
                address:"地球"
            }
        },
        // methods: {
        //     showName(){
        //         alert(this.school_name)
        //     }
        // }
        // mixins:[mixin]
    }
</script>

<style>
</style>