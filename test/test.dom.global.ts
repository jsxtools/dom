import "@jsxtools/dom/global"

const div = new DOM.HTML.Element('div')

div // assert(div.constructor, HTMLDivElement)

DOM.HTML.set(div, { class: 'lol yay' })

// assert(div.className, "lol yay")

const anchor = new DOM.HTML.Element('a')

anchor // assert(anchor.constructor, HTMLAnchorElement)

DOM.HTML.set(anchor, {
	role: 'button',
})

DOM.HTML.set(anchor, 'Link')

DOM.HTML.set(div, anchor)
