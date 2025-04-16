<template>
	<!-- 监听入场和离场动画的结束 -->
	<transition
		name="dynamic-island"
		@after-enter="handleAfterEnter"
		@after-leave="handleAfterLeave"
	>
		<!-- 仅控制显示/隐藏，挂载点由父组件决定 -->
		<div v-if="show" class="dynamic-island">
			<p>{{ message }}</p>
		</div>
	</transition>
</template>

<script>
import { onMounted, ref } from 'vue'

export default {
	name: 'DynamicIsland',
	props: {
		message: {
			type: String,
			default: ''
		},
		timeout: {
			type: Number,
			default: 4000  // 入场动画结束后等待 timeout 毫秒再开始离场动画
		},
		onClosed: {
			type: Function,
			default: () => {
			}
		}
	},
	setup(props) {
		const show = ref(false)

		// 入场动画结束后启动定时任务
		const handleAfterEnter = () => {
			setTimeout(() => {
				show.value = false
			}, props.timeout)
		}

		// 离场动画结束后，调用回调卸载组件
		const handleAfterLeave = () => {
			props.onClosed()
		}

		onMounted(() => {
			// 直接触发展示，transition 会处理动画效果
			show.value = true
		})

		return {
			show,
			handleAfterEnter,
			handleAfterLeave
		}
	}
}
</script>

<style lang="scss" scoped>
.dynamic-island {
	//@apply rounded-2xl;
	/* 不再使用 fixed 定位，由外层容器来控制位置 */
	background: #1a1a1a;
	border-bottom-left-radius: 12px;
	border-bottom-right-radius: 12px;
	padding: 10px 20px;
	box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
	width: auto;
	min-width: 100px;
	color: #fefefe;

	&:before ,&:after {
		content: '';
		position: absolute;
		top: 0;
		width: 20px;
		height: 20px;
	}
	&:before {
		left: -20px;
		background: radial-gradient(circle at bottom left, transparent 20px, #1a1a1a 21px);
	}
	&:after {
		right: -20px;
		background: radial-gradient(circle at bottom right, transparent 20px, #1a1a1a 21px);
	}
}

/* 入场动画：从上方平滑滑入 */
.dynamic-island-enter-from {
	transform: translateY(-100%);
	opacity: 0;
}

.dynamic-island-enter-active {
	transition: transform 1s cubic-bezier(0.22, 1, 0.36, 1), opacity 1s cubic-bezier(0.22, 1, 0.36, 1);
}

.dynamic-island-enter-to {
	transform: translateY(0);
	opacity: 1;
}

/* 离场动画：向上缩小消失 */
.dynamic-island-leave-from {
	transform: translateY(0) scaleY(1);
	opacity: 1;
}

.dynamic-island-leave-active {
	transition: transform 0.5s ease, opacity 0.5s ease;
}

.dynamic-island-leave-to {
	transform: translateY(-100%) scaleY(0);
	opacity: 0;
}
</style>
