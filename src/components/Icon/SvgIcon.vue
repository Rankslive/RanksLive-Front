<template>
	<svg class="iconSize">
		<use :fill="color" :href="symbolId" />
	</svg>
</template>

<script lang="ts" setup>
const { color, prefix, name } = defineProps({
	color: {
		type: String
	},
	prefix: {
		type: String,
		default: 'icons'
	},
	name: {
		type: String,
		default: ''
	}
})
const symbolId = computed(() => `#${prefix}-${name}`)
</script>

<style lang="scss" scoped>
.iconSize {
	vertical-align: -0.15em;
	width: 1em;
	height: 1em;
	@apply overflow-hidden;
}
</style>