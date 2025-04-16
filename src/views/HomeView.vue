<template>
	<div class="rank-container">
		<div class="z-20">
			<Menubar />
		</div>
		<div class="relative overflow-x-auto w-full h-full p-4 px-28 z-20">
			<swiper
				:keyboard="{enabled: true}"
				:modules="modules"
				:mousewheel="true"
				:navigation="false"
				:pagination="{clickable: true}"
				:slidesPerView="1"
				:spaceBetween="30"
			>
				<swiper-slide>
					<div class="grid grid-cols-5 gap-4">
						<a-card
							v-for="item in Array.from({length:15}, (_, i) => i+1)"
							:key="'2222'+item"
							title="Arco Card"
							:body-style="{height:'250px'}"
						>
							<ul class="p-0">
								<li>
									<a href="@#" class="text-white">asdas</a>
								</li>
							</ul>
						</a-card>
					</div>
				</swiper-slide>
			</swiper>

		</div>
		<div class="z-20">
			<MacDock />
		</div>
	</div>
</template>

<script lang="ts" setup>
import Menubar from '@/components/Menubar/Menubar.vue'
import MacDock from '@/components/Docker/Docker.vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Keyboard, Mousewheel, Navigation, Pagination, Virtual } from 'swiper/modules'

import 'swiper/scss'
import 'swiper/scss/pagination'
import 'swiper/scss/navigation'
import 'swiper/scss/virtual'

const modules = [Keyboard, Pagination, Navigation, Mousewheel, Virtual]
</script>

<style lang="scss" scoped>
.rank-container {
	@apply relative w-full h-full grid grid-rows-[30px_1fr_64px];
	background-image: url('@/assets/images/bg1.jpg');
	background-repeat: no-repeat;
	background-size: cover;

	&::before {
		content: "";
		position: absolute;
		background: rgb(0 0 0 / 0.03);
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 11;
	}
}

</style>
