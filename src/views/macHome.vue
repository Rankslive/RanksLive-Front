<template>
	<div class="rank-container ">
		<div class="">
			<Menubar/>
		</div>
		<div class="bg-green-500 relative overflow-x-auto w-full h-full p-8">
			<div class="horizontal-container">
				<div class="content grid grid-cols-6 gap-5">

					<a-card v-for="item in Array.from({length:50}, (_, i) => i+1)" :key="'2222'+item" title="Arco Card">
						ByteDance's core product, Toutiao ("Headlines"), is a content platform in
						China and around the world. Toutiao started out as a news recommendation
						engine and gradually evolved into a platform delivering content in various
						formats.
					</a-card>

				</div>
			</div>
		</div>
		<div class="bg-sky-300">
			<MacDock/>
		</div>
	</div>
</template>

<script lang="ts" setup>
import Menubar from '@/components/Menubar/Menubar.vue'
import MacDock from '@/components/Docker/Docker.vue'
</script>

<style lang="scss" scoped>
.rank-container {
	@apply relative w-full h-full grid grid-rows-[30px_1fr_64px];
}

</style>
