<template>
    <div>
        <h1 v-text="msg" ref="title"></h1>
        <button @click="showDOM">点我获取DOM</button>
        <School ref="sch"/>
    </div>
</template>

<script>
    import School from "./components/School.vue"

    export default {
        name:"App",
        components:{
            School
        },
        data(){
            return {
                msg: '欢迎学习Vue'
            }
        },
        methods:{
            showDOM(){
                //当给原生标签加上ref时，this.$refs拿到的是真实DOM元素（类似document.getElementById）
                console.log(this.$refs.title)
                //当给组件加上ref时，this.$refs拿到的是组件实例对象
                console.log(this.$refs.sch)
            }
        }
        
    }
</script>
<style>

</style>