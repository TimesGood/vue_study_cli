// 单文件组件
<template>
    <!-- 组件的结构 -->
    <div >
        <h1>{{msg}}</h1>
        <h2>学生姓名：{{name}}</h2>
        <h2>学生性别：{{sex}}</h2>
        <h2>学生年龄：{{age}}</h2>
    </div>
</template>

<script>
    // 组件交互的相关代码
    export default{
        name:"Student",
        data(){
            return {
                msg: "我是一个尚硅谷的学生"
            }
        },
        //props：接收使用传递过来的值
        //简单接收
        props:["name","sex","age"]


        //接收参数的同时对参数进行类型限制
        // props:{
        //     name:String,
        //     age:Number,
        //     sex:String
        // }


        //接收参数的同时对参数进行类型限制+默认值的指定+必要性的限制
        // props:{
        //     name: {
        //         type:String,
        //         required:true //表示名字必须
        //     },
        //     age: {
        //         type: Number,
        //         default: 99 //默认值
        //     },
        //     sex: {
        //         type: String,
        //         required:true
        //     }
        // }

        //注：props外部传递过来的值不能更改
    }
</script>

<style>

</style>