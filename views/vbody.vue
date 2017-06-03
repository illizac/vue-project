<template>
	<div id = "main">
		
		<mt-swipe id = 'swip' :auto = '4000'>
			<mt-swipe-item v-for = "i,key in topList" :key = "key">
				<router-link class = 'swipa' :to= "{path:'context',query: {id: i.id}}" >
		        	<img :src = "i.image" />
		        	<p>{{i.title}}</p>
		        </router-link>
			</mt-swipe-item>
		</mt-swipe>
		<vhot :theList = "hotList" theTitle = "今日热闻"></vhot>
		
	</div>
</template>

<script>
import jsonp from '../js/jsonp'
import vhot from './vhot.vue'


export default {
	data: () => ({
		topList: [],
		hotList: []
	}),
	mounted(){
		jsonp({
			url: 'http://120.25.166.237:3000',
			data: {
				url: 'news-at.zhihu.com',
				path: '/api/4/news/latest'
			},
			success: (data) => {
				var msg = data.msg;
				this.topList = msg.top_stories;
				this.hotList = msg.stories;
			}
		})
		
	},
	components: {
		vhot
	}
}
</script>

<style>
	#main{
		flex: 1;
		overflow: auto;
		background: #f3f3f3;
	}
	#swip{
	    width: 100%;
	    height: 3.375rem;
	    background: #666;
	}  
	#swip .swipa>img{
		width: 100%;
		position: relative;
		top: -.8rem;
	}
	#swip .swipa>p{
		position: absolute;
		top: 66%;
		color: #fff;
		font-size: .3rem;
		box-sizing: border-box;
		padding: 0 .55rem 0 .25rem;
		text-shadow: .01rem .01rem .02rem #000;
		height: .8rem;
		overflow: hidden;
	}
</style>