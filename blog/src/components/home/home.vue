<template>
	<div>
		<top-tab @transfer='getList'></top-tab>
		<text-content :list='list' :urlImages='urlImages'></text-content>
	</div>
</template>
	
<script>
	import TopTab from '@/pages/top-tab/top-tab'
	import TextContent from '@/pages/content/content'
	import axios from 'axios'
	export default{
		data(){
			return {
				list:[1],
				urlImages:[1]
			}
		},
		components:{
			TopTab,
			TextContent
		},
		created(){
			console.log('创建了实例')
		},
		methods:{
			getList(data){
				console.log(data)
				this.list = data[0]
				this.urlImages = data[1]
			},
		},
	}
</script>

<style>
	div span{
		color: #42B983;
		
	}
	.icon-home{
		font-size: 99px;
	}
</style>