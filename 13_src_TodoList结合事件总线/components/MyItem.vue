<template>
    <li>
        <label>
            <input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)"/>
            <span>{{todo.title}}</span>
        </label>
        <button @click="handleDelete(todo.id)">删除</button>
    </li>
</template>

<script>
    export default{
        name:"Item",
        props:["todo"],
        methods:{
            handleCheck(todoId){
                this.$bus.$emit("checkTodo",todoId)
            },
            handleDelete(todoId){
                if(confirm("确定删除吗？")) {
                    this.$bus.$emit("deleteTodo",todoId)

                }
                
            }
        },
        mounted(){

        }

    }
</script>

<style scoped>
    li {
        list-style: none;
        height: 36px;
        line-height: 36px;
        padding: 0 5px;
        border-bottom: 1px solid #ddd;
    }
    li label {
        float: left;
        /* 光标 */
        cursor: pointer;
    }
    li button {
        float: right;
        margin-top: 3px;
        background-color: red;
        cursor: pointer;
        border: 0px;
        display: none;
    }
    li label input {
        vertical-align: middle;
        margin-right: 6px;
        position: relative;
        cursor: pointer;
        top: -1px;
    }
    
    /* 取消最后一个元素下边框 */
    li:last-child{
        border-bottom: none;
    }
    /* 鼠标放在上面时 */
    li:hover button{
        display: block;
    }
    li:hover{
        background-color: #ddd;
    }
</style>