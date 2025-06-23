<template>
	<div class="dock">
		<div class="dock-list-container">
			<ul class="flex justify-center items-center gap-4 p-0">
				<li>
					<a-tooltip content="This is tooltip content">
						<img
							:src="finder"
							alt="sad"
							height="42"
							width="42"
						/>
					</a-tooltip>
				</li>
				<li class="cursor-pointer">
					<a-tooltip content="This is tooltip content" @click="handleSetting">
						<img
							:src="setting"
							alt="sad"
							height="42"
							width="42"
						/>
					</a-tooltip>
				</li>
				<li
					v-for="item in Array.from({length:15}, (_, i) => i+1)"
					:key="'dock'+1"
				>
					<a-tooltip content="This is tooltip content">
						<img
							:src="terminal"
							alt="sad"
							height="42"
							width="42"
						/>
					</a-tooltip>
				</li>
			</ul>
		</div>
	</div>
</template>

<script lang="ts" setup>
import finder from '@/assets/dock/finder.svg'
import setting from '@/assets/dock/setting.svg'
import terminal from '@/assets/dock/terminal.svg'
import { Modal } from '@arco-design/web-vue'

defineOptions({
	name: 'MacDock'
})

const handleSetting = () => {
	Modal.info({
		title: 'Info Title',
		content: 'welcome'
	})
}

</script>

<style lang="scss" scoped>
.dock {
	@apply absolute bottom-3 w-full flex justify-center items-center;

	.dock-list-container {
		@apply py-2 px-4 rounded-2xl;

		background: rgba(83, 83, 83, .25);
		backdrop-filter: blur(1.8rem);
		-webkit-backdrop-filter: blur(1.8rem);
		border: .06rem solid hsla(0, 0%, 100%, .18);
	}
}</style>
