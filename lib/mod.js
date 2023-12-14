let Class
let name
let value

let __proto__ = '__proto__'
let prototype = 'prototype'

let __createClass = (Super, xmlns) => {
	function Element(...args) {
		Class = new.target || Element

		return Class === Element ? set(
			document.createElementNS('http://www.w3.org/' + xmlns, args.shift()),
			...args
		) : Reflect.construct(Super, args, Class)
	}

	Element[prototype] = Super[prototype]
	Element[__proto__] = Super[__proto__]

	return {
		Element,
		set,
	}
}

let set = (element, ...args) => (
	element.append(
		...args.filter(arg => {
			if (arg != null && arg !== Object(arg) || arg instanceof Node) {
				return true
			} else {
				for (name in arg) {
					value = arg[name]

					if (value == null || value instanceof Boolean) {
						element.toggleAttribute(name)
					} else {
						element.setAttribute(name, value)
					}
				}
			}
		})
	),
	element
)

export let HTML = __createClass(HTMLElement, '1999/xhtml')
export let MathML = __createClass(MathMLElement, '1998/Math/MathML')
export let SVG = __createClass(SVGElement, '2000/svg')

export class Fragment extends DocumentFragment {
	constructor(...children) {
		super().append(...children)
	}
}
