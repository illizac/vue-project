<template>
	<div class = 'hotBlock'>
		<p class = "tTitle">{{theTitle}}</p>
		<ul>
			<li v-for = 'i,key in theList' :key = 'key'>
				<router-link :to= "{path:'context',query: {id: i.id}}" >
					<p>{{i.title}}</p>
					<img :src = 'i.images[0]'/>
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script>

export default {
	props: ['theTitle', 'theList']
}
</script>

<style>
.tTitle{
	height: .77rem;
	line-height: .77rem;
	font-size: .2rem;
	color: #6f6f6f;
	box-sizing: border-box;
	padding-left: .24rem;
}
.hotBlock>ul>li{
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
.hotBlock>ul>li>a{
	display: flex;
	height: 100%;
}
.hotBlock>ul>li>a:visited>p{
	color: #777;
}
.hotBlock>ul>li>a:active{
  text-decoration: none;
}
.hotBlock>ul>li img{
	width: 1.23rem;
	height: 1.08rem;
	padding-left: .2rem;
}
.hotBlock>ul>li p{
	flex: 1;
	font-size: .25rem;
	color: #333;
	height: 1.08rem;
	line-height: .36rem;
	overflow: hidden;
}
</style>