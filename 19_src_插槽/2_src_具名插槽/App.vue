<template>
	<div class="container">
		<Category title="美食" :listData="foods">
			<!-- slot属性表示往那个插槽放这个内容 -->
			<img slot="center" src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg">
			<a slot="footer" href="http://www.baidu.com">链接</a>
		</Category>
		<Category title="游戏" :listData="games">
			<ul slot="center">
				<li v-for="(item,index) in games" :key="index">{{item}}</li>
			</ul>
			<div class="foot" slot="footer">
				<a href="http://www.baidu.com">链接1</a>
				<a href="http://www.baidu.com">链接2</a>
			</div>
			
		</Category>
		<Category title="电影" :listData="films">
			<video slot="center" controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
			<!-- 当使用template，可以把slot="xxx"写成v-slot:xxx -->
			<template v-slot:footer>
				<div class="foot">
					<a href="http://www.baidu.com">链接1</a>
					<a href="http://www.baidu.com">链接2</a>
					<a href="http://www.baidu.com">链接2</a>
				</div>
				<h4>欢迎前来观看</h4>
			</template>
			
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
	.container ,.foot{
		display: flex;
		/*分配弹性布局中图块周围相同的空间*/
		justify-content: space-around;
	}
	h4 {
		text-align: center;
	}
</style>
