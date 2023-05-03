import { SVG } from '@jsxtools/dom'

export const example = new SVG.Element('svg', { width: 150, height: 100, viewBox: '0 0 300 200' },
	new SVG.Element('rect', { width: '100%', height: '100%', fill: 'red' }),
	new SVG.Element('circle', { cx: 150, cy: 100, r: 80, fill: 'green' }),
	new SVG.Element('text', { x: 150, y: 125, 'font-size': 60, 'text-anchor': 'middle', fill: 'white' },
		'SVG'
	)
)
