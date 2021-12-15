<template>
    <div>
        <!-- “:”号表示v-bind，对数据进行字符串转为数字Number -->
        <Student name="李四" sex="男" :age="18"/>
    </div>
</template>

<script>
    import Student from "./components/Student.vue"

    export default {
        name:"App",
        components:{
            Student
        },
        data(){
            return {
                
            }
        }
        
    }
</script>
<style>

</style>