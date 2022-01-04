<template>
	<div class="container">
		<Search/>
		<List/>
	</div>
</template>

<script>
	import Search from './components/Search'
	import List from './components/List'
	import "../node_modules/bootstrap/dist/css/bootstrap.css"
	export default {
		name:'App',
		components:{Search,List}
	}
</script>
