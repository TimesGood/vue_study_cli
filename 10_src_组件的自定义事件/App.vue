<template>
    <div class="app">
        <h1>{{msg}}，学生姓名是：{{student_name}}</h1>
        <!-- 通过父组件给子组件床底函数类型的props实现子给父传递数据 -->
        <School :getSchoolName="getSchoolName"/>
        <!-- 通过父组件绑定一个自定义事件实现子给父传递数据（第一种写法，使用@或v-on） -->
        <Student @cus_event="getStudentName"/>
        <!-- 通过父组件绑定一个自定义事件实现子给父传递数据（第二种写法，使用ref） -->
        <Student ref="student"/>
        <!-- 注：，第二种拓展性、灵活性比较好一点，比如点击后延迟一会儿再响应之类的，但如果业务没有其他奇奇怪怪的需求的话，使用第一种也不错 -->
        <!-- 当在组件标签上定义原生事件时，vue默认把该上面的事件（包括原生事件）当为自定义事件，可在其上加修饰符@click.native保持原生事件，但是默认会把该事件交给父组件触发 -->
        <Student ref="student" @click="demo"/>
    </div>
</template>

<script>
    import School from "./components/School.vue"
    import Student from "./components/Student.vue"

    export default {
        name:"App",
        components:{
            School,
            Student
        },
        data(){
            return {
                msg:"你好啊",
                student_name: ""
            }
        },
        methods: {
            getSchoolName(name) {
                console.log("收到学校名："+name)
            },
            getStudentName(name){
                console.log("收到学生名："+name)
                this.student_name = name
            }
        },
        //组件加载完毕触发
        mounted() {
            //把自定义事件绑定到组件Student上
            this.$refs.student.$on("cus_event",this.getStudentName)
            //注意：
            // this.$refs.student.$on("cus_event",function(){
            //     //如果是这个写法，this就是谁调用的个事件this指向的就是哪个组件的实例对象
            // })
            // this.$refs.student.$on("cus_event",(name,params) => {
            //     //如果是这个写法，this指向的是当前组件的实例对象
            // })
        },
        
    }
</script>
<style scoped>
    .app{
        background-color: gray;
        padding: 5px;
    }
</style>