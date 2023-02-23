import { HTML } from '@jsxtools/dom'

const div = new HTML.Element('div')

div // assert(div.constructor, HTMLDivElement)

HTML.set(div, { class: 'lol yay' })

// assert(div.className, "lol yay")

const anchor = HTML.tag('a')

anchor // assert(anchor.constructor, HTMLAnchorElement)

HTML.set(anchor, {
	role: 'button',
})
