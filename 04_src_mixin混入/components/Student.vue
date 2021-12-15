// 单文件组件
<template>
    <!-- 组件的结构 -->
    <div >
        <h2 @click="showName">学生姓名：{{name}}</h2>
        <h2>学生性别：{{sex}}</h2>
        <h2>学生年龄：{{age}}</h2>
    </div>
</template>

<script>
    //引入混合(局部混合)
    // import {mixin} from "../mixin.js" 
    // 组件交互的相关代码
    export default{
        name:"Student",
        data(){
            return {
                name: "张三",
                sex: "男",
                age: 18
            }
        },
        // methods: {
        //     showName(){
        //         alert(this.name)
        //     }
        // }

        //配置混合
        // mixins:[mixin]
    }
</script>

<style>

</style>