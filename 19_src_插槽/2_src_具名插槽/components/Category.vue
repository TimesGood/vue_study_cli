<template>
	<div class="category">
		<h3>{{title}}</h3>
		<!--
			slot具名插槽，为每个插槽命名，在使用者插入数据时，需要指定插槽
		-->
		<slot name="center">
			<ul>
				<li v-for="(item,index) in listData" :key="index">{{item}}</li>
			</ul>
		</slot>
		<slot name="footer"></slot>
		
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