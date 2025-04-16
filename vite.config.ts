import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import { ArcoResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import { resolve } from 'node:path'

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		vueJsx(),
		AutoImport({
			imports: [
				'vue',
				'vue-router',
				'pinia'
			],
			dts: 'types/auto-import.d.ts',
			resolvers: [ArcoResolver()]
		}),
		Components({
			resolvers: [
				ArcoResolver({
					sideEffect: true
				})
			]
		}),
		createSvgIconsPlugin({
			// Specify the icons folder to be cached
			iconDirs: [resolve(process.cwd(), 'src/assets/icons')],
			// Specify symbolId format
			symbolId: 'icons-[dir]-[name]'
		})


	],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url))
		}
	},
	server: {
		port: 22222,
		open: true,
		host: '0.0.0.0'
	}
})
