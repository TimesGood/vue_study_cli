<template>
    <li>
        <label>
            <input type="checkbox"/>
            <span>{{todo.title}}</span>
        </label>
        <button>编辑</button>
    </li>
</template>

<script>
    export default{
        name:"Item",
        props:["todo"]

    }
</script>

<style scoped>

</style>