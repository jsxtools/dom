let __proto__ = '__proto__'
let prototype = 'prototype'

let assign = (host, attrs, ...children) => {
	if (attrs instanceof Node || typeof attrs !== 'object' && attrs !== undefined) {
		children.unshift(attrs)
	} else {
		for (name in attrs) {
			value = attrs[name]

			host[value === null || value === undefined || value === true || value === false ? 'toggleAttribute' : 'setAttribute'](name, value)
		}
	}

	host.append(...children)

	return host
}

let createClass = (Super, xmlns) => {
	function Element(name, ...args) {
		Class = new.target || Element
		element = assign(document.createElementNS('http://www.w3.org/' + xmlns, name, Object(...args)), ...args)

		if (Class !== Element) element[__proto__] = Class[prototype]

		return element
	}

	Element[prototype] = Super[prototype]
	Element[__proto__] = Super[__proto__]

	Element.assign = assign

	return Element
}

let Class
let element
let name
let value

export let HTML = createClass(HTMLElement, '1999/xhtml')
export let MathML = createClass(MathMLElement, '1998/Math/MathML')
export let SVG = createClass(SVGElement, '2000/svg')
