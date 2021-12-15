<template>
    <div class="my_footer">
        <label>
            <input type="checkbox"/>
            <span>我是尾部</span>
        </label>
        
    </div>
</template>

<script>
    export default{
        name:"Footer",
        data(){
            return {
                name:"社会",
                address:"地球"
            }
        }
    }
</script>

<style scoped>
    .my_footer{
        width: 200px;
        height: 50px;
        border: 1px solid orange;
    }
</style>