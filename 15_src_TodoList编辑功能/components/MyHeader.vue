<template>
    <div>
        <input type="text" placeholder="请输入任务名，按回车确认" v-model="title" @keyup.enter="add"/>
    </div>
</template>

<script>
    //引入nanoid随机生成id，需要命令npm i nanoid安装
    import {nanoid} from "nanoid"
    export default{
        name:"Header",
        data(){
            return {
                title:""
            }
        },
        // props:["addTodo"],
        methods:{
            add(){
                if(!this.title) return
                const todoObj = {id:nanoid(),title:this.title,done:false};
                this.$emit("addTodo",todoObj)
                this.title = ""
            }
        }
    }
</script>
<style scoped>
    
</style>