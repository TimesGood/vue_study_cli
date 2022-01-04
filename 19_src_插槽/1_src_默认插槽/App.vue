<template>
	<div class="container">
		<Category title="美食" :listData="foods">
			<img src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg">
		</Category>
		<Category title="游戏" :listData="games"/>
		<Category title="电影" :listData="films">
			<video controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
		</Category>
	</div>
</template>

<script>
	import Category from "./components/Category.vue"
	export default {
		name:'App',
		components:{Category},
		data() {
			return {
				foods:["火锅","烧烤","小龙虾","牛排"],
				games:["怪物猎人","Apex","尼尔-机械纪元","最终幻想"],
				films:["《绿皮书》","《肖申克的救赎》","《头号玩家》","《钢铁侠》"]
			}
		}
	}
</script>
<style scoped>
	.container {
		display: flex;
		/*分配弹性布局中图块周围相同的空间*/
		justify-content: space-around;
	}
</style>
