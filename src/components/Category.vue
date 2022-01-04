<template>
	<div class="category">
		<h3>{{title}}</h3>
		<slot>
			<ul>
				<li v-for="(item,index) in games" :key="index">{{item}}</li>
			</ul>
		</slot>
		
	</div>
</template>

<script>
	export default {
		name:'List',
		data() {
			return {
				games:["怪物猎人","Apex","尼尔-机械纪元","最终幻想"]
			}
		},
		props:["title"]
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