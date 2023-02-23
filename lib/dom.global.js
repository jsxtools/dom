{
	let __proto__ = '__proto__'
	let prototype = 'prototype'
	let tag = document.createElementNS.bind(document)
	let add = (host, ...children) => (host.append(...children), host)
	let set = (host, attrs) => {
		for (name in attrs) host.setAttribute(name, attrs[name])
		return host
	}
	let use = (Super, xmlns = 'http://www.w3.org/1999/xhtml') => {
		function Element(name = 'span', attrs = null, ...children) {
			Class = new.target || Element
			element = add(set(tag(xmlns, name, attrs), attrs), ...children)

			if (Class !== Element) element[__proto__] = Class[prototype]

			return element
		}

		Element[prototype] = Super[prototype]
		Element[__proto__] = Super[__proto__]

		return Element
	}
	let Class
	let element
	let name

	HTML = { Element: use(HTMLElement), add, set, tag }
	SVG = { Element: use(SVGElement, 'http://www.w3.org/2000/svg'), add, set }
}