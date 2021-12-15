<template>
    <li>
        <label>
            <input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)"/>
            <!--虽然这样可以实现业务，但是尽量别用，因为违反了vue的原则，这实际上更改了props中的值，而vue实则不允许修改props中的值的-->
            <!-- <input type="checkbox" v-model="todo.done"/> -->
            <span>{{todo.title}}</span>
        </label>
        <button @click="handleDelete(todo.id)">删除</button>
    </li>
</template>

<script>
    export default{
        name:"Item",
        props:["todo","checkTodo","deleteTodo"],
        // props:["todo"],
        methods:{
            handleCheck(todoId){
                this.checkTodo(todoId)
            },
            handleDelete(todoId){
                if(confirm("确定删除吗？")) {
                    this.deleteTodo(todoId)
                }
                
            }
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