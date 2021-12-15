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
                //拿到用户输入的数据如何给MyList呢？
                //目前所学可以在父App上创一个方法，然后props进行接收，接收到方法直接this.调用把值给父，
                //然后父把数据通过标签<xxx xxx:"xxx"/>传递给MyList，这个方法比较low，后面会学到其他方法，但也不要忘记基础的方法
                
                //改为触发事件
                // this.addTodo(todoObj)
                this.$emit("addTodo",todoObj)
                this.title = ""
            }
        }
    }
</script>
<style scoped>
    
</style>