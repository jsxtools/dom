declare module "@jsxtools/dom/utils" {
	declare type primitive = string | number | bigint | boolean | undefined | symbol | null
	declare type Appendable = Node | primitive
	declare type AnyHTMLElement<T> = Partial<import('../html-types/HTMLElements/commonElementsWithAllRoles').commonElement<T>>
	declare type HTMLAttributesTagNameMap = import('../html-types/HTMLElements/index').HTMLElements

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

	type SafeElementAttributesMap<T extends Element> =
		& Partial<ElementAttributesMap<T>>
		& {
			[attributeName: string]: unknown
		}

	interface HTMLInterface {
		Element: {
			new <K extends keyof HTMLElementTagNameMap>(name: K, attrs: SafeElementAttributesMap<HTMLElementTagNameMap[K]>, ...children: Appendable[]): HTMLElementTagNameMap[K]
			new (name: string, attrs: SafeElementAttributesMap<Element>, ...children: Appendable[]): HTMLElement

			new <K extends keyof HTMLElementTagNameMap>(name: K, attrs: SafeElementAttributesMap<HTMLElementTagNameMap[K]>): HTMLElementTagNameMap[K]
			new (name: string, attrs: SafeElementAttributesMap<Element>): HTMLElement

			new <K extends keyof HTMLElementTagNameMap>(name: K): HTMLElementTagNameMap[K]
			new (name: string): HTMLElement
		}

		tag<K extends keyof HTMLElementTagNameMap>(name: K): HTMLElementTagNameMap[K]
		tag<K extends keyof HTMLElementTagNameMap>(name: K, opts: ElementCreationOptions): HTMLElementTagNameMap[K]
		tag(name: string): HTMLElement
		tag(name: string, opts: ElementCreationOptions): HTMLElement

		add<T extends ParentNode>(host: T, ...children: Appendable[]): T

		set<T extends Element>(host: T): T
		set<T extends Element>(host: T, attributes: SafeElementAttributesMap<T>): T
	}

	interface SVGInterface {
		Element: {
			new <K extends keyof SVGElementTagNameMap>(name: K, attrs: SafeElementAttributesMap<SVGElementTagNameMap[K]>, ...children: Appendable[]): SVGElementTagNameMap[K]
			new (name: string, attrs: SafeElementAttributesMap<Element>, ...children: Appendable[]): SVGElement

			new <K extends keyof SVGElementTagNameMap>(name: K, attrs: SafeElementAttributesMap<SVGElementTagNameMap[K]>): SVGElementTagNameMap[K]
			new (name: string, attrs: SafeElementAttributesMap<Element>): SVGElement

			new <K extends keyof SVGElementTagNameMap>(name: K): SVGElementTagNameMap[K]
			new (name: string): SVGElement
		}

		tag<K extends keyof SVGElementTagNameMap>(name: K): SVGElementTagNameMap[K]
		tag<K extends keyof SVGElementTagNameMap>(name: K, opts: ElementCreationOptions): SVGElementTagNameMap[K]
		tag(name: string): SVGElement
		tag(name: string, opts: ElementCreationOptions): SVGElement

		add<T extends ParentNode>(host: T, ...children: Appendable[]): T

		set<T extends ParentNode>(host: T): T
		set<T extends ParentNode>(host: T, attributes: SafeElementAttributesMap<T>): T
	}
}
