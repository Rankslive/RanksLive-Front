interface ICurrentTimeOptions {
	interval?: number // 更新间隔（毫秒）
	formatter?: (date: Date) => string // 自定义时间格式函数
}

export const useCurrentTime = (options: ICurrentTimeOptions = {}) => {
	const {
		interval = 1000,
		formatter = (date: Date) => {
			const month = date.getMonth() + 1
			const day = date.getDate()
			const hour = date.getHours().toString().padStart(2, '0')
			const minute = date.getMinutes().toString().padStart(2, '0')
			const second = date.getSeconds().toString().padStart(2, '0')

			const weekdays = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']
			const weekday = weekdays[date.getDay()]

			return `${month}月${day}日 ${weekday} ${hour}:${minute}`
		}
	} = options

	const currentTime = ref<string>(formatter(new Date()))
	let timer: number | undefined

	const updateTime = () => {
		currentTime.value = formatter(new Date())
	}

	onMounted(() => {
		updateTime()
		timer = window.setInterval(updateTime, interval)
	})

	onUnmounted(() => {
		if (timer !== undefined) {
			clearInterval(timer)
		}
	})

	return {
		currentTime
	}
}