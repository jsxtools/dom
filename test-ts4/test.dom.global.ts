import "@jsxtools/dom/global"

const div = new HTML('div')

div // assert(div.constructor, HTMLDivElement)

HTML.assign(div, { class: 'lol yay' })

// assert(div.className, "lol yay")

const anchor = new HTML('a')

anchor // assert(anchor.constructor, HTMLAnchorElement)

HTML.assign(anchor, {
	role: 'button',
})
