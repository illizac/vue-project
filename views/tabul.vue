<template>
	<ul id = 'tabul'>
		<li @click = 'tog' class = 'active' key = '1'>
			<router-link to= "/" ><i class = 'iconfont icon-shouye'></i><p>首页</p></router-link>
		</li>
		
		<li v-for = 'i,key in list' :key = 'key' @click = 'tog'>
			<router-link :to= "{path:'/' ,query: {id: i.id, name: i.name}}">
				<p>{{i.name}}</p>
				<i class = 'iconfont icon-jiahao'></i>
			</router-link>
		</li>
	</ul>
</template>

<script>
import jsonp from '../js/jsonp'

export default {
	data: () => ({
		list: []
	}),
	mounted(){
		jsonp({
			url: 'http://120.25.166.237:3000',
			data: {
				url: 'news-at.zhihu.com',
				path: '/api/4/themes'
			},
			success: (data) => {
				var msg = data.msg;
				this.list = msg.others;		
			}
		})		
	},
	methods: {
		tog(e){
			this.$emit('tooo');
		}
	}
}
</script>

<style>
	#tabul{

	}
	#tabul>li{
		height: .75rem;
		background: #fff;
		line-height: .75rem;
		font-size: .23rem;
		box-sizing: border-box;
		padding: 0 .81rem 0 .3rem;
	}
	#tabul>li>a{
		color: #000;
		display: flex;
	}
	#tabul>li:first-child>a{
		color: #00a2ed;
	}
	#tabul>li:first-child>a>i{
		padding: 0 .2rem 0 .05rem;
		color: #00a2ed;
		font-size: .25rem
	}
	#tabul>li>a>p{
		flex: 1;
	}
	#tabul>li>a:active{
	  text-decoration: none;
	}
	#tabul>li>a>i{
		color: #ccc;
		font-size: .12rem;
	}

	#tabul>.active{
		background: #f0f0f0;
	}
</style>