<template>
	<div class="container">
		<Category title="游戏">
		</Category>
		<Category title="游戏">
		</Category>
		<Category title="游戏">
			
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
