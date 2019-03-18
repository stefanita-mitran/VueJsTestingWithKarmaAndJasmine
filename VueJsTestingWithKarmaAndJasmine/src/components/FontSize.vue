<template>
	<div v-if="sizeOfFont">
		<span class="font-size" :style=style>{{ fontSize }}</span>
	</div>
</template>
<script>
export default {
	props: ['sizeOfFont'],
	computed:{
		fontSize: function(){
			return this.sizeOfFont + 'px';
		},
		style: function(){
			return 'font-size: ' + this.fontSize;
		}
	}
}
</script>