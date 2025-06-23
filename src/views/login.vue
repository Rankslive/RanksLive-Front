<template>
	<transition name="fade">
		<div v-if="isLocked" class="login-mask">
			<div class="login-window">
				<input placeholder="输入密码" type="password" @keyup.enter="unlock" />
			</div>
		</div>
	</transition>
</template>

<script lang="ts" setup>
const isLocked = ref(true)

const unlock = () => {
	isLocked.value = false
}

</script>

<style lang="scss" scoped>
/* 遮罩层动画 */
.fade-enter-active, .fade-leave-active {
	transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.fade-enter-from, .fade-leave-to {
	opacity: 0;
}

.login-mask {
	@apply fixed inset-0 bg-black/50 flex items-center justify-center;
}

/* 登录窗口动画 */
.login-window {
	@apply bg-white rounded-lg p-8 shadow-xl;
	transform: scale(0.9);
	//animation: loginScale 0.4s cubic-bezier(0.68, -0.55, 0.27, 1.55);
}

@keyframes loginScale {
	0% {
		transform: scale(0.9);
	}
	50% {
		transform: scale(1.05);
	}
	100% {
		transform: scale(1);
	}
}

/* 桌面入场动画 */
.zoom-enter-active {
	transition: all 0.5s ease-out;
}

.zoom-enter-from {
	transform: translateY(20px);
	opacity: 0;
}

.menu-bar {
	@apply h-12 bg-gray-100/50 backdrop-blur-md;
	animation: slideDown 0.4s ease-out;
}

.dock {
	@apply fixed bottom-4 left-1/2 -translate-x-1/2 bg-gray-100/50 rounded-xl p-2 backdrop-blur-md;
	animation: slideUp 0.4s ease-out;
}

@keyframes slideDown {
	from {
		transform: translateY(-20px);
	}
	to {
		transform: translateY(0);
	}
}

@keyframes slideUp {
	from {
		transform: translateY(20px);
	}
	to {
		transform: translateY(0);
	}
}
</style>