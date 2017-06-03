<template>
	<div id = "main">
		<div id = 'othtop'>
			<img :src = 'msg.background'>
			<p>{{msg.description}}</p>
		</div>
		<div id = 'editors'>
			<p>主编</p>
			<ul>
				<li v-for = 'i,key in msg.editors'>
					<img :src = 'i.avatar'>
				</li>
			</ul>
		</div>
		<ul>
			<li v-for = 'i,key in msg.stories' :key = 'key'>
				<router-link :to= "{path:'context',query: {id: i.id}}" >
					<p>{{i.title}}</p>
					<img v-if = 'i.images' :src = 'i.images?i.images[0]:null'/>
				</router-link>
			</li>
		</ul>
		
	</div>
</template>

<script>
import jsonp from '../js/jsonp'


export default {
	data: () => ({
		msg: {}
	}),
	methods: {
		getMsg(){
			this.msg = {}
			jsonp({
				url: 'http://120.25.166.237:3000',
				data: {
					url: 'news-at.zhihu.com',
					path: '/api/4/theme/' + this.$route.query.id
				},
				success: (data) => {
					var msg = data.msg;
					this.msg = msg;
				}
			})
		}
	},
	mounted(){
		this.getMsg();	
	},
	watch: {
		'$route' : function(){
			this.getMsg()
		}
	}
}
</script>

<style>
	#main{
		flex: 1;
		overflow: auto;
		background: #f3f3f3;
	}

	#othtop{
		height: 3.37rem;
		overflow: hidden;
		position: relative;
		background: #666;
	}
	#othtop>img{
		position: relative;
		top: -1.2rem;
	}

	#othtop>p{
		position: absolute;
		top: 66%;
		color: #fff;
		font-size: .3rem;
		box-sizing: border-box;
		padding: 0 .55rem 0 .25rem;
		text-shadow: .01rem .01rem .02rem #000;
	}


	#main>#editors{
		height: .86rem;
		display: flex;
		overflow: hidden;
	}
	#main>#editors>p{
		font-size: .2rem;
		color: #6f6f6f;
		text-align: center;
		line-height: .86rem;
		width: .68rem;
	}
	#main>#editors>ul{
		flex: 1;
		display: flex;
	}
	#main>#editors>ul>li{
		padding: 0 .1rem;
		display: flex;
	}
	#main>#editors>ul>li>img{
		width: .45rem;
		height: .45rem;
		border-radius: 50%;
		align-self: center;
	}


	#main>ul>li{
		width: 5.08rem;
		height: 1.47rem;
		background: #fff;
		overflow: hidden;
		margin: 0 auto .11rem;
		border-radius: .07rem;
		box-shadow: .01rem .01rem .02rem #c1c1c1;
		padding: .18rem .24rem 0 .18rem;
		box-sizing: border-box;
	}
	#main>ul>li>a{
		display: flex;
		height: 100%;
	}
	#main>ul>li>a:visited>p{
		color: #777;
	}
	#main>ul>li>a:active{
	  text-decoration: none;
	}
	#main>ul>li img{
		width: 1.23rem;
		height: 1.08rem;
		padding-left: .2rem;
	}
	#main>ul>li p{
		flex: 1;
		font-size: .25rem;
		color: #333;
		height: 1.08rem;
		overflow: hidden;
		line-height: .36rem;
	}
</style>