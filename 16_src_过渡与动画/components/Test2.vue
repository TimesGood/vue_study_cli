<template>
    <div>
        <button @click="isShow = !isShow">显示/隐藏</button>
        <!-- 使用transition包裹需要执行动画的元素，加上appear表示一上来的时候就执行动画，最终该标签不会存在于页面中 -->
        <transition name="hello" appear>
            <h1 v-show="isShow" class="come">你好啊！</h1>
        </transition>

        <!-- 当为多个元素配置动画时，要使用transition-group并且每个元素都要有key -->
        <transition-group name="hello" appear>
            <h1 v-show="isShow" key="1" class="come">你好啊1！</h1>
            <h1 v-show="isShow" key="2" class="come">你好啊2！</h1>
            <h1 v-show="isShow" key="3" class="come">你好啊3！</h1>
            <h1 v-show="isShow" key="4" class="come">你好啊4！</h1>
        </transition-group>
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
        /* 过滤可以写在CSS里面但不建议，建议写在.xxx-enter-active,.xxx-leave-active里面 */
        /* transition: 1s linear; */
    }
    /* 进入的起点 */
    /* .hello-enter{
        transform: translateX(-100%);
    } */
    /* 进入的终点 */
    /* .hello-enter-to{
        transform: translateX(0%);
    } */
    /* 离开的起点 */
    /* .hello-leave{
        transform: translateX(0%);
    } */
    /* 离开的终点 */
    /* .hello-leave-to{
        transform: translateX(-100%);
    } */
    .hello-enter-active,.hello-leave-active{
         transition: 1s linear;
    }
    /* 以上过渡效果可以合并 */
    /* 进入起点跟离开终点是同样的合并 */
    .hello-enter,.hello-leave-to{
        transform: translateX(-100%);
    }
    /* 进入终点跟离开起点是同样的合并 */
    .hello-enter-to,.hello-leave{
        transform: translateX(0%);
    }
</style>