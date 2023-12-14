import * as fs from 'node:fs'
import * as zlib from 'node:zlib'

/** @typedef {{ none: number, gzip: number, brot: number }} FileSize */
/** @typedef {{ module: FileSize, common: FileSize, global: FileSize }} FileSizeByType */

const getFileSizes = () => ({
	module: getFileSize(new URL('../lib/mod.min.js', import.meta.url)),
	common: getFileSize(new URL('../lib/mod.min.cjs', import.meta.url)),
	global: getFileSize(new URL('../lib/global.min.js', import.meta.url)),
})

const getFileSize = (filePath) => {
	const fileData = fs.readFileSync(filePath)

	return {
		none: fs.statSync(filePath).size,
		gzip: zlib.gzipSync(fileData).length,
		brot: zlib.brotliCompressSync(fileData).length,
	}
}

const getPaddingStartByFileSizes = (/** @type {FileSize[]} */...fileSizes) => {
	let padding = 0

	for (const fileSize of fileSizes) {
		padding = Math.max(padding, String(fileSize.none).length, String(fileSize.gzip).length, String(fileSize.brot).length)
	}

	return (value, paddingStart = 0) => String(value).padStart(Math.max(padding, paddingStart), ' ')
}

const getSmallestFileSize = (/** @type {FileSize[]} */...fileSizes) => Math.min(...fileSizes.map(fileSize => fileSize.none))

const getFileSizesTemplate = (
	/** @type {FileSizeByType} */ sizes,
	paddingStart = getPaddingStartByFileSizes(sizes.module, sizes.common, sizes.global),
	smallestSize = getSmallestFileSize(sizes.module, sizes.common, sizes.global)
) => `## File size

**DOM** minifies to ${smallestSize} bytes before compression.

| Package    | Compression | Filesize |
|:---------- |:----------- | --------:|
| **Module** | **none**    | ${paddingStart(sizes.module.none, 7)}B |
|            | **gzip**    | ${paddingStart(sizes.module.gzip, 7)}B |
|            | **brotli**  | ${paddingStart(sizes.module.brot, 7)}B |
| **Common** | **none**    | ${paddingStart(sizes.common.none, 7)}B |
|            | **gzip**    | ${paddingStart(sizes.common.gzip, 7)}B |
|            | **brotli**  | ${paddingStart(sizes.common.brot, 7)}B |
| **Global** | **none**    | ${paddingStart(sizes.global.none, 7)}B |
|            | **gzip**    | ${paddingStart(sizes.global.gzip, 7)}B |
|            | **brotli**  | ${paddingStart(sizes.global.brot, 7)}B |

---
`

const fileSizeRegExp = /## File size[\W\w]+?\n---\n/

const updateReadme = (/** @type {URL} */ filePath, fileSizesTemplate = '') => {
	const oldReadmeData = fs.readFileSync(filePath, 'utf-8')

	const newReadmeData = oldReadmeData.replace(fileSizeRegExp, fileSizesTemplate)

	fs.writeFileSync(filePath, newReadmeData)
}

const fileSizesByType = getFileSizes()
const fileSizesTemplate = getFileSizesTemplate(fileSizesByType)

updateReadme(
	new URL('../README.md', import.meta.url),
	fileSizesTemplate
)

updateReadme(
	new URL('../lib/README.md', import.meta.url),
	fileSizesTemplate
)
