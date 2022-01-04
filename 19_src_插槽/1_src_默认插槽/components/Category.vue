<template>
	<div class="category">
		<h3>{{title}}</h3>
		<!--
			slot默认插槽，作用是等组件使用者在使用该组件时，在组件标签体内写入的元素插入到插槽所在位置
			当没有使用插槽时，默认显示插槽中的内容
		-->
		<slot>
			<ul>
				<li v-for="(item,index) in listData" :key="index">{{item}}</li>
			</ul>
		</slot>
		
	</div>
</template>

<script>
	export default {
		name:'List',
		data() {
			return {
				
			}
		},
		props:["title","listData"]
	}
</script>

<style scoped>
	.category {
		background-color:skyblue;
		width: 200px;
		height: 300px;
	}

	h3{
		text-align: center;
		background-color: orange;
	}

	img {
		width: 100%;
	}
	video {
		width: 100%;
	}
</style>