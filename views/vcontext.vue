<template>
	<div id = 'wrap'>
		
		<div id = "headmain">
			<a @click = 'back()'>
				<i class = "iconfont icon-weibiaoti1"></i>
			</a>
			<i class = "iconfont icon-share"></i>
			<i class = "iconfont icon-shoucang"></i>
			<p>
				<i class = "iconfont icon-msgtalk"></i>
				{{chead.comments}}
			</p>
			<p>
				<i class = "iconfont icon-zan"></i>
				{{chead.popularity}}
			</p>			
		</div>


		<div id = 'conmain'>
			<div id = 'comtop' v-if = 'index.image'>
				<img :src = 'index.image'>
				<p>{{index.title}}</p>
				<span>{{index.image_source}}</span>
			</div>
			<div id = 'comM'>

			</div>
		</div>
	</div>
</template>

<script>
import jsonp from '../js/jsonp'

export default {
	data: () => ({
		index: {},
		chead: {}
	}),
	methods: {
		back(){
			window.history.back()
		}
	},
	mounted(){
		new Promise((resolve, reject) => {
			jsonp({
				url: 'http://120.25.166.237:3000',
				data: {
					url: 'news-at.zhihu.com',
					path: '/api/4/story-extra/' + this.$route.query.id
				},
				success: (data) => {
					this.chead  = data.msg;
					resolve();
				}
			})
		}).then(() => {
			jsonp({
				url: 'http://120.25.166.237:3000',
				data: {
					url: 'news-at.zhihu.com',
					path: '/api/4/news/' + this.$route.query.id
				},
				success: (data) => {
					this.index  = data.msg;
					document.getElementById('comM').innerHTML = this.index.body;
				}
			})
		}, () => {})		
	}
}
</script>

<style scoped>
#wrap{
	display: flex;
	flex-direction: column;
	height: 100%;
	width: 100%;
	overflow: hidden;
}
#conmain{
	flex: 1;
	overflow: auto;
}

#headmain{
	height: .84rem;
	background: #00a2ed;
	color: #fff;
	font-size: .25rem;
	overflow: hidden;
	line-height: .84rem;
	display: flex;
	padding-right: .28rem;
	box-sizing: border-box;
}
#headmain>a{
	color: #fff;
	flex: 1;
}


i{
	padding: 0 .05rem 0 .28rem;
	display: inline-block;
	box-sizing: border-box;		
	font-size: .30rem
}

#comtop{
	height: 3.03rem;
	overflow: hidden;
	position: relative;
	box-shadow: 0 -0.3rem 1rem #666 inset;
}
#comtop>img{
	position: relative;
	top: -1.2rem;
	z-index: -1;
}

#comtop>p{
	position: absolute;
	top: 60%;
	color: #fff;
	font-size: .3rem;
	box-sizing: border-box;
	padding: 0 .55rem 0 .25rem;
	text-shadow: .01rem .01rem .02rem #000;
}

#comtop>span{
	display: block;
	position: absolute;
	bottom: .18rem;
	right: .2rem;
	color: #fff;
	opacity: .9;
	font-size: .17rem;
}

#comM{
	padding: .35rem .32rem 0;
	box-sizing: border-box;
	font-size: .25rem;
}

</style>