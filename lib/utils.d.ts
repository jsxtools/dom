declare module "@jsxtools/dom/utils" {
	type primitive = string | number | bigint | boolean | undefined | symbol | null
	type Appendable = Node | primitive
	type AnyHTMLElement<T extends Element> = Partial<import('./types/HTMLElements/commonElementsWithAllRoles').commonElement<T>>
	type HTMLAttributesTagNameMap = import('./types/HTMLElements/index').HTMLElements

	type ElementAttributesMap<T extends Element> = T extends HTMLAnchorElement
		? HTMLAttributesTagNameMap['a']
	: T extends HTMLAreaElement
		? HTMLAttributesTagNameMap['area']
	: T extends HTMLAudioElement
		? HTMLAttributesTagNameMap['audio']
	: T extends HTMLBaseElement
		? HTMLAttributesTagNameMap['base']
	: T extends HTMLBodyElement
		? HTMLAttributesTagNameMap['body']
	: T extends HTMLBRElement
		? HTMLAttributesTagNameMap['br']
	: T extends HTMLButtonElement
		? HTMLAttributesTagNameMap['button']
	: T extends HTMLCanvasElement
		? HTMLAttributesTagNameMap['canvas']
	: T extends HTMLTableColElement
		? HTMLAttributesTagNameMap['col']
	: T extends HTMLDivElement
		? HTMLAttributesTagNameMap['div']
	: T extends HTMLParagraphElement
		? HTMLAttributesTagNameMap['p']
	: T extends HTMLPictureElement
		? HTMLAttributesTagNameMap['picture']
	: T extends HTMLPreElement
		? HTMLAttributesTagNameMap['pre']
	: T extends HTMLSpanElement
		? HTMLAttributesTagNameMap['span']
	: T extends HTMLTableElement
		? HTMLAttributesTagNameMap['table']
	: T extends HTMLTableSectionElement
		? HTMLAttributesTagNameMap['tbody']
	: T extends HTMLTableRowElement
		? HTMLAttributesTagNameMap['tr']
	: T extends HTMLTableCaptionElement
		? HTMLAttributesTagNameMap['caption']
	: T extends HTMLDataListElement
		? HTMLAttributesTagNameMap['datalist']
	: T extends HTMLHeadElement
		? HTMLAttributesTagNameMap['head']
	: T extends HTMLLegendElement
		? HTMLAttributesTagNameMap['legend']
	: T extends HTMLTemplateElement
		? HTMLAttributesTagNameMap['template']
	: T extends HTMLTitleElement
		? HTMLAttributesTagNameMap['title']
	: T extends HTMLDataElement
		? HTMLAttributesTagNameMap['data']
	: T extends HTMLDetailsElement
		? HTMLAttributesTagNameMap['details']
	: T extends HTMLDialogElement
		? HTMLAttributesTagNameMap['dialog']
	: T extends HTMLDListElement
		? HTMLAttributesTagNameMap['dl']
	: T extends HTMLEmbedElement
		? HTMLAttributesTagNameMap['embed']
	: T extends HTMLFieldSetElement
		? HTMLAttributesTagNameMap['fieldset']
	: T extends HTMLHeadingElement
		? HTMLAttributesTagNameMap['h1']
	: T extends HTMLHRElement
		? HTMLAttributesTagNameMap['hr']
	: T extends HTMLHtmlElement
		? HTMLAttributesTagNameMap['html']
	: T extends HTMLIFrameElement
		? HTMLAttributesTagNameMap['iframe']
	: T extends HTMLImageElement
		? HTMLAttributesTagNameMap['img']
	: T extends HTMLInputElement
		? HTMLAttributesTagNameMap['input']
	: T extends HTMLLabelElement
		? HTMLAttributesTagNameMap['label']
	: T extends HTMLLIElement
		? HTMLAttributesTagNameMap['li']
	: T extends HTMLLinkElement
		? HTMLAttributesTagNameMap['link']
	: T extends HTMLMapElement
		? HTMLAttributesTagNameMap['map']
	: T extends HTMLMenuElement
		? HTMLAttributesTagNameMap['menu']
	: T extends HTMLMetaElement
		? HTMLAttributesTagNameMap['meta']
	: T extends HTMLMeterElement
		? HTMLAttributesTagNameMap['meter']
	: T extends HTMLModElement
		? HTMLAttributesTagNameMap['ins']
	: T extends HTMLObjectElement
		? HTMLAttributesTagNameMap['object']
	: T extends HTMLOListElement
		? HTMLAttributesTagNameMap['ol']
	: T extends HTMLOptGroupElement
		? HTMLAttributesTagNameMap['optgroup']
	: T extends HTMLOptionElement
		? HTMLAttributesTagNameMap['option']
	: T extends HTMLOutputElement
		? HTMLAttributesTagNameMap['output']
	: T extends HTMLProgressElement
		? HTMLAttributesTagNameMap['progress']
	: T extends HTMLQuoteElement
		? HTMLAttributesTagNameMap['q']
	: T extends HTMLScriptElement
		? HTMLAttributesTagNameMap['script']
	: T extends HTMLSelectElement
		? HTMLAttributesTagNameMap['select']
	: T extends HTMLSlotElement
		? HTMLAttributesTagNameMap['slot']
	: T extends HTMLSourceElement
		? HTMLAttributesTagNameMap['source']
	: T extends HTMLStyleElement
		? HTMLAttributesTagNameMap['style']
	: T extends HTMLTableCellElement
		? HTMLAttributesTagNameMap['td']
	: T extends HTMLTextAreaElement
		? HTMLAttributesTagNameMap['textarea']
	: T extends HTMLTimeElement
		? HTMLAttributesTagNameMap['time']
	: T extends HTMLTrackElement
		? HTMLAttributesTagNameMap['track']
	: T extends HTMLUListElement
		? HTMLAttributesTagNameMap['ul']
	: T extends HTMLVideoElement
		? HTMLAttributesTagNameMap['video']
	: AnyHTMLElement<T>

	type DOMElementAttributesMap<T extends Element> =
		& Partial<ElementAttributesMap<T>>
		& {
			[attributeName: string]: unknown
		}

	interface DOM<TagsByName extends object> {
		Element: {
			new <K extends keyof TagsByName>(name: K, attributes: DOMElementAttributesMap<Element & TagsByName[K]>, ...children: Appendable[]): TagsByName[K]
			new <K extends keyof TagsByName>(name: K, ...children: Appendable[]): TagsByName[K]

			new(name: string, attributes: DOMElementAttributesMap<Element>, ...children: Appendable[]): HTMLElement
			new(name: string, ...children: Appendable[]): HTMLElement
		}
		
		set<T extends Element>(host: T, attributes: DOMElementAttributesMap<T>, ...children: Appendable[]): T
		set<T extends ParentNode>(host: T, ...children: Appendable[]): T
	}

	interface MathML extends DOM<MathMLElementTagNameMap> {}
	interface HTML extends DOM<HTMLElementTagNameMap> {}
	interface SVG extends DOM<SVGElementTagNameMap> {}
}
