<template>
	<div class="relative h-full z-20 menubar text-sm backdrop-blur flex justify-between items-center px-2">
		<div class="">
			<ul class="flex items-center gap-4 pl-0">
				<li>
					<a-dropdown trigger="hover">
							<span>
								<img alt="ranks" class="w-6" src="/logo.svg" />
							</span>
						<template #content>
							<a-doption>关于我们</a-doption>
							<a-doption>锁定屏幕</a-doption>
							<a-doption>退出登录</a-doption>
						</template>
					</a-dropdown>
				</li>
				<li>
					<span>热门榜单资讯</span>
				</li>
			</ul>
		</div>
		<div class="">
			<ul class="flex items-center gap-4">
				<li>
					<button class="bg-transparent p-0 border-none cursor-pointer" @click="handleQuery">
						<icon-user />
					</button>
				</li>
				<li>
					<a-tooltip content="RanksLive ApiHub">
						<a class="text-white" href="https://github.com/Rankslive/RanksLiveApi" target="_blank">
							<icon-github />
						</a>
					</a-tooltip>
				</li>
				<li>
					<icon-wifi />
				</li>
				<li>
					<button class="bg-transparent p-0 border-none cursor-pointer" @click="handleQuery">
						<icon-search />
					</button>
				</li>
				<!-- 4月16日 周三 14:41 -->
				<li>{{ currentTime }}</li>
			</ul>
		</div>
	</div>
</template>

<script lang="ts" setup>

import { useCurrentTime } from '@/hooks/currentTime.ts'

defineOptions({
	name: 'Menubar'
})

const handleQuery = () => {
	console.log(123)
}

const { currentTime } = useCurrentTime()
</script>

<style lang="scss" scoped>
.menubar {
	@apply text-white;
	//background: rgb(0 0 0 / 30%);
	//box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
	//backdrop-filter: blur( 2px );
	//-webkit-backdrop-filter: blur( 2px );
}
</style>