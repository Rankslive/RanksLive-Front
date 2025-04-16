/** @type {import('tailwindcss').Config} */
export default {
	darkMode: [
		'selector',
		'class'
	],
	safelist: ['dark'],
	prefix: '',
	content: [
		'./index.html',
		'./src/**/*.{vue,js,ts,jsx,tsx}'
	],
	plugins: [],
	corePlugins: {
		preflight: false
	},
	theme: {
		border: {
			none: 'none'
		}
	}
}
