<template>
    <div>
        <button @click="requestGet">获取学生信息</button>
    </div>
</template>

<script>
    import axios from "axios"
    export default {
        name: "Test",
        data() {
            return {
                isShow:true
            }
        },
        methods: {
            requestGet(){
                //配置代理之后需要在端口后之后加上所配置的前缀名
                axios.get("http://localhost:8081/proxy_prefix/esProduct/search/simple?keyword=%E5%B0%8F%E7%B1%B3").then(
                    //请求成功
                    response => {
                        console.log("请求成功",response.data)
                    },
                    //请求失败
                    error => {
                        console.log("请求失败",error)
                    }
                )
            }
        }
}
</script>

<style scoped>
   
</style>