<template>
    <div class="my_footer" v-show="total">
        <label>
            <!-- <input type="checkbox" :checked="isAll" @change="checkAll"/> -->
            <input type="checkbox" v-model="isAll"/>
            <span>已完成{{doneTotal}}/全部{{total}}</span>
            <button @click="clearAll">清除已完成</button>
        </label>
    </div>
</template>

<script>
    export default{
        name:"Footer",
        data(){
            return {
            }
        },
        props:["todos","checkAllTodo","clearAllTodo"],
        computed:{
            total(){
                return this.todos.length
            },
            doneTotal(){
                //第一种方法
                // return this.todos.filter((todo) => {
                //     return todo.done
                // }).length
                
                //第二种方法
                //reduce：js函数，
                //参数pre：第一次执行指定默认值0，下一次执行其值就是上一次执行的返回值，最后一次执行的返回值就是reduce函数的返回值了
                //参数current：current就是每个循环的todo项
                // return this.todos.reduce((pre,current) => {
                //     return pre + (current.done ? 1:0)
                // },0)
                //第二种方法再精简
                return this.todos.reduce((pre,todo) => pre +(todo.done ? 1:0),0)
            },
            isAll:{
                get(){
                    return this.total === this.doneTotal && this.total > 0
                },
                set(value){
                    this.checkAllTodo(value)
                }
            }
        },
        methods: {

                 
            // checkAll(e){
            //     this.checkAllTodo(e.target.checked)
            // }
            clearAll(){
                this.clearAllTodo()
            }
        },
    }
</script>

<style scoped>
    .my_footer{
        width: 200px;
        height: 50px;
        border: 1px solid orange;
    }
</style>