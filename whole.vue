<template>
	<div id = "wrap">

		<transition name = 'tabani'>
			<vtab v-if = 'isTab' @toggle = 'tog'></vtab>
		</transition>	
		<div v-if = 'isTab' id = 'tabwrap'></div>


		<vheader @toggle = 'tog'></vheader>

		<vbody v-if = '!$route.query.id'></vbody>
		<voth v-if = '$route.query.id'></voth>
	</div>
</template>


<script>
import vheader from './views/header.vue'
import vbody from './views/vbody.vue'
import vtab from './views/vtab.vue'
import voth from './views/vOther.vue'

export default {
	data: () => ({
		isTab: false,
		name: false
	}),
	components: {
		vheader,
		vbody,
		vtab,
		voth
	},
	methods: {
		tog(){
			this.isTab = !this.isTab
		}
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
	#tabwrap{
		width: 100%;
		height: 100%;
		z-index: 998;
		opacity: 0.7;
		background: #000;
		position: absolute;
	}

	.tabani-enter-active, .tabani-leave-active {
	 	transition: all .3s
	}
	.tabani-enter, .tabani-leave-active {
	  	transform: translateX(-100%); 
	}
</style>