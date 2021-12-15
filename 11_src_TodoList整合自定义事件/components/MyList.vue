<template>
    <div>
        <ul>
            <MyItem
                v-for="t in todos"
                :key="t.id"
                :todo="t"
                :checkTodo="checkTodo"
                :deleteTodo="deleteTodo"
            />
        </ul>
    </div>
</template>

<script>
import MyItem from "./MyItem.vue"
    export default{
        name:"List",
        components: {MyItem},
        data(){
            return {
                // todos:[
                //     {id:"001",title:"抽烟",done:true},
                //     {id:"002",title:"喝酒",done:false},
                //     {id:"003",title:"烫头",done:true},
                // ]
            }
        },
        props:["todos","checkTodo","deleteTodo"],
        // props:["todos"],
    }
</script>

<style scoped>

</style>