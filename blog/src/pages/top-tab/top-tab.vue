<template>
	<ul class="bar">
		<li v-for="(item,index) in tList">
			<router-link :class='[{active:$route.query.id == item.listName},{active:index==0&&!$route.query.id}]' :to='{path:"/home",query:{id:item.listName}}'>{{item.listName}}</router-link>
		</li>
	</ul>
</template>

<script>
	import axios from 'axios'
	//结构赋值得到url
	import {url} from '@/api/getUserImages.js'

	
	export default{
		data(){
			return{
				tList:[{
					listName:'HTML5',
				},{
					listName:'CSS3',
				},{
					listName:'JS',
				},{
					listName:'AJAX',
				},{
					listName:'VUE',
				},],
				list:[],
				urlImages:[]
			}
		},//DOM还未生成，处理数据的时候
		created(){
								
			console.log('创建')
			console.log(url)
			axios.get(url+'/vueData').then((res)=>{
//				console.log(res)
				this.list = res.data.list;
				this.urlImages = res.data.urlImages;
			})
		},//已经将数据加载到页面
		mounted(){
			
		},
		methods:{
			reserve(){
				console.log('改变了导航')
				var q = this.$route.query.id
				//根据不同的id请求不同的数据
				axios.get(url+'/vueData/?q='+q).then((res)=>{
//			
					this.list = res.data.list;
					this.urlImages = res.data.urlImages;
				})
					
			},
			change(){
				//将数据传给父组件
				this.$emit('transfer',[this.list,this.urlImages])
			}
		},
		watch:{
			//当route数据改变时
			"$route":'reserve',
			'list':'change'
		}
	}
</script>

<style scoped>
	.bar{
		height: 45px;
		width: 100%;
		list-style:none ;
		margin: 0;
		padding: 0;
		border-bottom: 1px solid #ddd;
	}
	
	.bar li{
		height: 45px;
		width: 20%;
		float: left;
	}
	 a{
	 	font-size: 14px;
		line-height: 41px;
		text-align: center;
		display: block;
		height: 42px;
		widows: 100%;
		text-decoration: none;
		color: #999;
	}
	a.active{
		border-bottom:3px solid #80bd01;
		color: #222222;
	}
</style>