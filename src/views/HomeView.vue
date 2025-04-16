<template>
	<div class="rank-container ">

		<Menubar />

		<div class="overflow-x-auto pb-24">
			<div class="grid grid-cols-8 gap-4 p-4">
				<a-card class="col-span-2 backdrop-blur-3xl bg-white/30" title="Arco Card">
					<p>ByteDance's core product, Toutiao ("Headlines"), is a content platform in
						China and around the world. Toutiao started out as a news recommendation
						engine and gradually evolved into a platform delivering content in various
						formats.</p>
					<p>ByteDance's core product, Toutiao ("Headlines"), is a content platform in
						China and around the world. Toutiao started out as a news recommendation
						engine and gradually evolved into a platform delivering content in various
						formats.</p>
					<p>ByteDance's core product, Toutiao ("Headlines"), is a content platform in
						China and around the world. Toutiao started out as a news recommendation
						engine and gradually evolved into a platform delivering content in various
						formats.</p>
					<p>ByteDance's core product, Toutiao ("Headlines"), is a content platform in
						China and around the world. Toutiao started out as a news recommendation
						engine and gradually evolved into a platform delivering content in various
						formats.</p>
					<p>ByteDance's core product, Toutiao ("Headlines"), is a content platform in
						China and around the world. Toutiao started out as a news recommendation
						engine and gradually evolved into a platform delivering content in various
						formats.</p>
				</a-card>
				<a-card v-for="item in Array.from({length:1}, (_, i) => i+1)" :key="'2222'+item" title="Arco Card">
					ByteDance's core product, Toutiao ("Headlines"), is a content platform in
					China and around the world. Toutiao started out as a news recommendation
					engine and gradually evolved into a platform delivering content in various
					formats.
				</a-card>
			</div>
		</div>
	</div>
	<MacDock />
</template>

<script lang="ts" setup>
import MacDock from '@/components/Docker/Docker.vue'
import Menubar from '@/components/Menubar/Menubar.vue'
</script>

<style lang="scss" scoped>
.rank-container {
	@apply relative w-full h-full flex flex-col;
	background-image: url('@/assets/images/photo-1584565413502-db5cd7e28da7.avif');
	background-repeat: no-repeat;
	background-size: cover;
}
</style>
