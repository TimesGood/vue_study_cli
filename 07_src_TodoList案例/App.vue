<template>
    <div class="todo-wrap">
        <MyHeader :addTodo="addTodo"/>
        <MyList :todos="todos" :checkTodo="checkTodo" :deleteTodo="deleteTodo"/>
        <MyFooter :todos="todos" :checkAllTodo="checkAllTodo" :clearAllTodo="clearAllTodo"/>
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
                todos:[
                    {id:"001",title:"抽烟",done:true},
                    {id:"002",title:"喝酒",done:false},
                    {id:"003",title:"烫头",done:true},
                ]
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
            }

        }
        
    }
</script>
<style>

</style>