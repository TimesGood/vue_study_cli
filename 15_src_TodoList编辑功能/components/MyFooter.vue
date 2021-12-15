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
        props:["todos"],
        computed:{
            total(){
                return this.todos.length
            },
            doneTotal(){
                return this.todos.reduce((pre,todo) => pre +(todo.done ? 1:0),0)
            },
            isAll:{
                get(){
                    return this.total === this.doneTotal && this.total > 0
                },
                set(value){
                    // this.checkAllTodo(value)
                    this.$emit("checkAllTodo",value)
                }
            }
        },
        methods: {

                 
            // checkAll(e){
            //     this.checkAllTodo(e.target.checked)
            // }
            clearAll(){
                // this.clearAllTodo()
                this.$emit("clearAllTodo")
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