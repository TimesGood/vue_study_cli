<template>
    <div>
        <MyHeader :addTodu="addTodu"/>
        <MyList :todos="todos"/>
        <MyFooter/>
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
            addTodu(addTodu){
                this.todos.unshift(addTodu)
            }
        }
        
    }
</script>
<style>

</style>