<template>
    <li>
        <label>
            <input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)"/>
            <span v-show="!todo.isEdit">{{todo.title}}</span>
            <input
                v-show="todo.isEdit"
                type="text"
                :value="todo.title"
                @blur="handleBuler(todo,$event)"
                ref="inputTitle"
            />
        </label>
        <button class="btn-danger" @click="handleDelete(todo.id)">删除</button>
        <button v-show="!todo.isEdit" class="btn-edit" @click="handleEdit(todo)">编辑</button>
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
            },
            //编辑
            handleEdit(todo){
                //判断自己身上有没有isEdit，有就不用再次追加覆盖原来的isEdit了
                if(todo.hasOwnProperty("isEdit")) {
                    todo.isEdit = true
                }else {
                    this.$set(todo,"isEdit",true)
                }
                //不能在这写，涉及到Vue执行顺序的问题，当方法执行完之后才会解析模板放到页面
                //所以在这里模板还没有解析出来，导致在这获取焦点获取不到
                // this.$refs.inputTitle.focus()

                //要写在$nextTick里面
                //官方解释在下一次DOM更新结束之后执行指定区域
                //该方法表示当前方法执行完毕之后再执行里面的逻辑
                this.$nextTick(function(){
                    this.$refs.inputTitle.focus()
                })
               
            },
            //失去焦点
            handleBuler(todo,e){
                todo.isEdit = false
                if(!e.target.value.trim()) {
                    alert("输入不能为空")
                    return
                }
                this.$bus.$emit("updateTodo",todo.id,e.target.value)
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