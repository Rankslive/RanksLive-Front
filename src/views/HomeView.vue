<template>
	<div class="rank-container">
		<div class="z-20">
			<Menubar />
		</div>
		<div class="relative overflow-x-auto w-full h-full py-4 px-6 z-20">
			<div class="grid grid-cols-5 gap-5">
				<a-card
					v-for="item in Array.from({length:30}, (_, i) => i+1)"
					:key="'2222'+item"
					:body-style="{paddingTop:0}"
					class="mb-5"
					title="Arco Card"
				>
					<div class="rank-content relative h-96 overflow-scroll gap-4">
						<ul class="p-0 space-y-3">
							<li
								v-for="items in Array.from({length:30}, (_, i) => i+1)"
								:key="'2222'+items"
							>
								<a class="flex justify-between items-center text-slate-200" href="@#">
									<span>1.</span>
									<span class="mr-auto line-clamp-1">95岁离休干部被认定为恶势力主犯95岁离休干部被认定为恶势力主犯</span>
									<span>1457324</span>
								</a>
							</li>
						</ul>
					</div>
				</a-card>
			</div>
		</div>
		<div class="z-20">
			<MacDock />
		</div>
	</div>
</template>

<script lang="ts" setup>
import Menubar from '@/components/Menubar/Menubar.vue'
import MacDock from '@/components/Docker/Docker.vue'
import { useLand } from '@/hooks/useLand.ts'

useLand({
	message:'欢迎来到热门榜单数据平台'
})
</script>

<style lang="scss" scoped>
.rank-container {
	@apply relative w-full h-full grid grid-rows-[30px_1fr_80px];
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

.rank-content {

	&::-webkit-scrollbar {
		width: 4px;
		height: 4px;
	}

	&::-webkit-scrollbar-track {
		border-radius: 0;
		background-color: transparent;
	}

	&::-webkit-scrollbar-thumb {
		border-radius: 0;
		background-color: transparent;
	}

	&:hover::-webkit-scrollbar-thumb {
		background-color: #efefef;
	}

	&::-webkit-scrollbar-corner {
		background-color: transparent;
	}

}
</style>
