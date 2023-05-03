{
	let __proto__ = '__proto__'
	let prototype = 'prototype'

	let __createClass = (Super = Object, xmlns) => {
		function Element(name, ...args) {
			Class = new.target || Element

			element = set(
				document.createElementNS(
					'http://www.w3.org/' + xmlns,
					name,
					...args
				),
				...args
			)

			if (Class !== Element) {
				element[__proto__] = Class[prototype]
			}

			return element
		}

		Element[prototype] = Super[prototype]
		Element[__proto__] = Super[__proto__]

		return {
			Element,
			set(element, attrs, ...children) {
				if (attrs instanceof Node || attrs !== Object(attrs)) {
					children.unshift(attrs)
				} else {
					for (name in attrs) {
						value = attrs[name]
			
						if (value == null || value instanceof Boolean) {
							element.toggleAttribute(name)
						} else {
							element.setAttributeNS(
								'http://www.w3.org/' + xmlns,
								name,
								value
							)
						}
					}
				}
			
				element.append(...children)
			
				return element
			}
		}
	}

	let Class
	let element
	let name
	let value

	Object.assign(exports, {
		HTML: __createClass(globalThis.HTMLElement, '1999/xhtml'),
		MathML: __createClass(globalThis.MathMLElement, '1998/Math/MathML'),
		SVG: __createClass(globalThis.SVGElement, '2000/svg'),
		Fragment: class Fragment extends DocumentFragment {
			constructor(...children) {
				super().append(...children)
			}
		},
	})
}
