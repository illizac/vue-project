<template>
	<transition name = 'bodyrou'>
		<router-view></router-view>
	</transition>
</template>


<script>

export default {
	
}
</script>

<style scoped>

	.bodyrou-enter-active, .bodyrou-leave-active {
	 	transition: all .3s
	}
	.bodyrou-enter, .bodyrou-leave-active {
		transform: translateX(100%);
	}
</style>