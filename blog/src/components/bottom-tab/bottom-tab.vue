<template>
	<div class="b-tab">
		<ul>
			<li v-for="item in list" >
				<router-link :to='item.routerName' :class='{active:"/"+item.routerName == $route.path}'>
					<i :class="[icon,item.className]"></i>
					<em>{{ item.name }}</em>
				</router-link>
			</li>
			<!--<li><a href="" class="active"><i class="iconfont icon-home"></i><em>首页</em></a></li>
			<li><a href=""><i class="iconfont icon-paper-airplane"></i><em>发布</em></a></li>
			<li><a href=""><i class="iconfont icon-xiaoxi"></i><em>消息</em></a></li>
			<li><a href=""><i class="iconfont icon-yonghutouxiang"></i><em>我的</em></a></li>-->
		</ul>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				icon:'iconfont',
				list:[{
						className:'icon-home',
						name:'首页',
						routerName:'home'
					},{
						className:'icon-paper-airplane',
						name:'发布',
						routerName:'airplane'
					},{
						className:'icon-xiaoxi',
						name:'消息',
						routerName:'xiaoxi'
					},{
						className:'icon-yonghutouxiang',
						name:'我的',
						routerName:'yonghutouxiang'
					}]
			}
			
		}
	}
</script>

<style scoped>
	.b-tab{

		width: 100%;
		position:fixed;
		bottom: 0;
		left: 0;

	}
	ul{
		border-top: 1px solid #ddd;
		list-style: none;
		margin: 0;
		padding: 0;
	}
	ul li{
		width: 25%;
		float: left;
	}
	i.iconfont{
		font-size: 17px;
	}
	a{	
		padding: 5px 0;
		text-decoration: none;
		display: flex;
		flex-direction: column;
		font-style: none;
		height: 40px;
		justify-content: center;
		align-items: center;
		color: #222;
	}
	a.active{
		color: #80bd01;
	}
	a>em{
		font-size: 14px;
		font-style: normal
		
	}
</style>