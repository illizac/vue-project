<template>
	<div id = "headmain">
		<i class = "iconfont icon-iconfontfenlei" @click = 'tog'></i>
		<p>{{title}}</p>
		<div id = 'left'>
			<i class = "iconfont icon-tixing" v-if = 'title == "首页"'></i>
			<i class = "iconfont icon-gengduo" v-if = 'title == "首页"'></i>
			<i class = "iconfont icon-jinakangbaoicons19 ijia" v-if = 'title != "首页"'></i>
		</div>
	</div>
</template>

<script>
	export default {
		props: ['tes'],
		data: () => ({
			title: "首页"
		}),
		methods: {
			tog(){
				this.$emit('toggle')
			},
			change(rou){
				if(rou.query.name){
					this.title = rou.query.name
				}else{
					this.title = '首页'
				}
			}
		},
		mounted(){
			this.change(this.$route)
		},
		watch: {
			'$route' : function(val){
				this.change(val)
			}
		}
	}
</script>

<style scoped>
	#headmain{
		height: .84rem;
		background: #00a2ed;
		color: #fff;
		font-size: .25rem;
		overflow: hidden;
		line-height: .84rem;
		display: flex;
	}
	p{
		flex: 1;
	}
	#headmain>i{
		padding-left: .28rem;
		width: 1.1rem;
	}
	#left{
		width: 1.15rem;
		display: flex;
	}
	#left>i{
		flex: 1;
		text-align: center;
	}
	i{
		display: inline-block;
		box-sizing: border-box;		
		font-size: .30rem
	}
</style>