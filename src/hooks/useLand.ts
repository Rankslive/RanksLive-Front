import DynamicIsland from './DynamicIsland.vue'

interface UseLandOptions {
	message?: string
	timeout?: number
}

export function useLand(options: UseLandOptions = {}): any {
	// 全局容器
	function getGlobalContainer(): HTMLElement {
		let container = document.getElementById('dynamic-island-container')
		if (!container) {
			container = document.createElement('div')
			container.id = 'dynamic-island-container'
			// 固定在页面顶部，并设置垂直排列
			container.style.position = 'fixed'
			container.style.top = '0'
			container.style.left = '0'
			container.style.width = '100%'
			container.style.display = 'flex'
			container.style.flexDirection = 'column'
			container.style.alignItems = 'center'
			// 设置子元素之间的间隔
			container.style.gap = '10px'
			document.body.appendChild(container)
		}
		return container
	}

	const globalContainer = getGlobalContainer()
	const mountPoint = document.createElement('div')
	mountPoint.style.position = 'relative'
	globalContainer.appendChild(mountPoint)

	const app = createApp(DynamicIsland, {
		...options,
		onClosed: () => {
			app.unmount()
			if (mountPoint.parentNode) {
				mountPoint.parentNode.removeChild(mountPoint)
			}
		}
	})

	return app.mount(mountPoint)
}
