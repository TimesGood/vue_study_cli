<template>
    <div>
        <button @click="isShow = !isShow">显示/隐藏</button>
        <!-- 使用transition包裹需要执行动画的元素，加上appear表示一上来的时候就执行动画，最终该标签不会存在于页面中 -->
        <transition name="hello" appear>
            <h1 v-show="isShow" class="come">你好啊！</h1>
        </transition>
    </div>
</template>

<script>
export default {
    name: "Test",
    data() {
        return {
            isShow:true
        }
    }
}
</script>

<style scoped>
    h1{
        background-color: orange;
    }
    /* 动画执行的名字样式不能随便编写，只能用vue的，当transition没有写name属性时默认v-enter-active、v-leave-active */
    /* v-enter-active表示进入时的动画 */
    /* .v-enter-active{
        animation: transfer 1s;
    } */
    /* v-enter-active表示离开时的动画 */
    /* .v-leave-active{
        animation: transfer 1s reverse;
    } */

    /* transition写name属性时v-enter-active、v-leave-active中的v改为所命名的值 */
    .hello-enter-active{
        animation: transfer 1s;
    }
    /* v-enter-active表示离开时的动画 */
    .hello-leave-active{
        animation: transfer 1s reverse;
    }
    @keyframes transfer {
        from{
            transform: translateX(-100%);
        }to{
             transform: translateX(0%);
        }
    }
</style>