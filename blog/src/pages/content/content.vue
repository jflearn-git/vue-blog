<template>
	<scroll class="con"  :list='list' ref="scroll">
		<div ref='wrap'>
			
		<!--'id|+1': 1,
        'name':'@name',
        'date': '@dateTime',
        'title':'@cparagraph(1)',
        "see|60-1000": 100,
        "message|1-100": 100,
        'time':'@time',-->
			<div v-for="(item,index) in list" class="content">
				<div class="con-user">
					<img :src="urlImages[item.id].url" alt="" />
					<div id="user">
						<h4>{{item.name}}</h4>
						<p>{{item.date}} <span>#分享#</span></p>
						
					</div>
				</div>
				<div>
					<h2>{{item.title}}</h2>
				</div>
				<div>
					<ul>
						<li><i class="iconfont icon-yuedu"></i>{{item.see}}</li>
						<li><i class="iconfont icon-xiaoxi1"></i>{{item.message}}</li>
						<li>{{item.time}}</li>
					</ul>
				</div>
			</div>
			
			
		</div>
	
	</scroll>
</template>

<script>
	import Scroll from '@/base/scroll/scroll' 
	export default{
		data(){
			return {
				dissList:[6],
				
			}
		},
		mounted(){
			
			
		},
		components:{
			Scroll
		},
		methods:{
			toTop(){

				setTimeout(()=>{
					this.$refs.scroll.scrollTo(0,0);
					this.$refs.scroll.refresh()
				},20)
			}
		},
		props:['list','urlImages'],
		watch:{
			'list':'toTop'
		}
	}
</script>

<style scoped>
	.con{
		overflow: hidden;
		width: 100%;
		position: fixed;
		top: 46px;
		bottom: 52px;
		background: #ddd;
	}.content{
		background: white;
		padding: 10px 10px 0 10px;
		margin-bottom:10px ;
	}
	.con-user{
		height: 50px;
		width: 100%;
	}
	.con-user img{
		width: 50px;
		height: 50px;
		border-radius: 50%;
		float: left;
	}
	.con-user div{
		padding-left:5px ;
		float: left;
	}
	.con-user div p,div h4{
		margin: 4px 0;
	}
	.con-user div p{
		font-size: 12px;
		color: #999;
	}
	.content h2{
		/*height: 56px;*/
		margin: 10px 0;
		font-size: 18px;
	}
	.content ul{
		border-top:1px solid #ccc ;
		padding: 10px 0;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.content ul li{
		color: #CCCCCC;
		font-size: 14px;
		width: 33%;
		height: 20px;
		line-height:20px;
		text-align: center;

		
	}
	.content ul li:nth-of-type(2){
		border-left:1px solid #CCCCCC ;
		border-right:1px solid #CCCCCC ;
	}
</style>