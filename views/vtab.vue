<template>
	<div id = "tabmain">
		<div id = 'realTab'>
			<div id = 'tabTop'>
				<div>
					<img src = '../dist/images/log.png'>
					<p>请登录</p>
				</div>
				<ul>
					<li>
						<i class = 'iconfont icon-shoucang'></i>
						<p>我的收藏</p>
					</li>
					<li>
						<i class = 'iconfont icon-xiazai'></i>
						<p>离线下载</p>
					</li>
				</ul>
			</div>
			<tabul @tooo = 'tog'></tabul>
		</div>
		<div id = 'outTab' @click = 'tog'>
		</div>
	</div>
</template>

<script>
import tabul from './tabul.vue'

export default {
	data: () => ({
		list: []
	}),
	methods: {
		tog(){
			this.$emit('toggle');
		}
	},
	components: {
		tabul
	}
}
</script>

<style>
	#tabmain{
		position: absolute;
		width: 100%;
		height: 100%;
		z-index: 999;
		display: flex;
		overflow: auto;
	}
	#realTab{
		width: 4.56rem;
		background: #fff;
		flex-direction: column;
	}
	#outTab{
		flex: 1;
	}

	#tabTop{
		height: 1.66rem;
		width: 100%;
		background: #00a2ed;
		display: flex;
		flex-direction: column;
		color: #fff;
	}
	#tabTop>div:first-child{
		flex: 1;
		line-height: .9rem;
		font-size: .23rem;
		box-sizing: border-box;
		padding-left: .24rem;
		display: flex;
	}
	#tabTop>div:first-child>img{
		width: .5rem;
		height: .5rem;
		border-radius: 50%;
		background: #ccc;
		align-self: center;
	}

	#tabTop>div:first-child>p{
		padding-left: .21rem;
		flex: 1;
	}
	#tabTop>ul:last-child{
		height: .75rem;
		display: flex;
	}
	#tabTop>ul:last-child>li{
		flex: 1;
		display: flex;
		line-height: .75rem;
		font-size: .2rem;
	}
	#tabTop>ul:last-child>li>i{
		padding: 0 .37rem 0 .37rem;
	}

	#tabTop>ul:last-child>li>p{
		flex: 1;
	}
</style>