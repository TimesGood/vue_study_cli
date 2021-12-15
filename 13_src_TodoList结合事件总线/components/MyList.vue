<template>
    <div>
        <ul>
            <MyItem
                v-for="t in todos"
                :key="t.id"
                :todo="t"
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
            }
        },
        props:["todos"],
    }
</script>

<style scoped>

</style>