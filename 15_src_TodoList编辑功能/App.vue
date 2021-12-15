<template>
    <div class="todo-wrap">
        <MyHeader @addTodo="addTodo"/>
        <MyList :todos="todos"/>
        <MyFooter :todos="todos" @checkAllTodo="checkAllTodo" @clearAllTodo="clearAllTodo"/>
    </div>
</template>

<script>
    import MyFooter from "./components/MyFooter.vue"
    import MyHeader from "./components/MyHeader.vue"
    import MyList from "./components/MyList.vue"


    export default {
        name:"App",
        components:{MyFooter,MyHeader,MyList},
        data(){
            return {
                todos:JSON.parse(sessionStorage.getItem("todos")) || []
            }
        },
        methods:{
            //添加一个todo
            addTodo(addTodo){
                this.todos.unshift(addTodo)
            },
            //选中一个todo
            checkTodo(id){
                this.todos.forEach((todo) => {
                    if(todo.id == id) {
                        todo.done = !todo.done
                    }
                })
            },
            //删除一个todo
            deleteTodo(id){
                this.todos = this.todos.filter((todo) => {
                    return todo.id != id;
                })
            },
            //更新一个todo
            updateTodo(id,title) {
                this.todos.forEach((todo) => {
                    if(todo.id == id) {
                        todo.title = title
                    }
                })
            },
            //全选/取消全选
            checkAllTodo(done){
                this.todos.forEach((todo) => {
                    todo.done = done
                    
                })
            },
            //清除已选中的todo
            clearAllTodo(){
                this.todos = this.todos.filter((todo) => {
                    return !todo.done
                })
            },
        },
        watch: {
            todos:{
                deep:true,
                handler(value){
                    sessionStorage.setItem("todos",JSON.stringify(value))
                }
                
            }
        },
        mounted() {
            this.$bus.$on("checkTodo",this.checkTodo)
            this.$bus.$on("deleteTodo",this.deleteTodo)
            this.$bus.$on("updateTodo",this.updateTodo)
        },
        beforeDestroy() {
            this.$bus.$off("checkTodo")
            this.$bus.$off("deleteTodo")
            this.$bus.$off("updateTodo")
        }
        
    }
</script>
<style>
    .btn-danger {
        color:#fff;
        background-color: red;
        border: 1px solid rgb(199, 1, 1);
    }
    .btn-edit {
        color:#fff;
        background-color: skyblue;
        border: 1px solid rgb(65, 188, 236);
    }
</style>