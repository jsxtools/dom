// @ts-check

import * as terser from 'terser'
import * as fs from 'node:fs/promises'

const filePaths = [
	new URL('../lib/mod.js', import.meta.url),
	new URL('../lib/mod.cjs', import.meta.url),
	new URL('../lib/global.js', import.meta.url),
]

for (const filePath of filePaths) {
	const fileData = await fs.readFile(filePath, 'utf-8')
	const { code } = await terser.minify(fileData, {
		module: true,
		compress: { ecma: 2020, unsafe: true },
		mangle: {},
		output: { ecma: 2020 },
		parse: {},
		sourceMap: true
	})

	const minFilePath = new URL(filePath.href.replace(/([^\/])\.(c?js)$/, '$1.min.$2'))

	if (code) {
		await fs.writeFile(minFilePath, code)
	}
}
