# DOM

This library lets you manipulate the DOM with an API resembling JavaScript classes moreso than factories.

```ts
new HTML.Element("div")
// vs document.createElement("div")
```

### Usage

```shell
npm install @jsxtools/dom
```

```js
import { HTML } from '@jsxtools/dom'
```

```js
import '@jsxtools/dom/global'
```

```html
<script
  type="module"
  src="https://cdn.jsdelivr.net/npm/@jsxtools/dom/dom.js"
></script>
```

```html
<script
  src="https://cdn.jsdelivr.net/npm/@jsxtools/dom/dom.global.js"
></script>
```

---

## Augment Native Elements

This library also lets you create augmented native elements.

```js
class CustomDivElement extends HTML.Element {
  get special() {
    return 'feature'
  }
}

const customDiv = new CustomDivElement('div');

customDiv.special // "feature"
```

## Detailed Typing

This library also provides more detailed typing than TypeScript out-of-the-box.

```rs
new HTML.Element("a", {
  h /*
       suggested attribute names:

     | "href" | "hidden" | "hreflang"
     | "aria-haspopup" | "aria-hidden"
```

```rs
new HTML.Element("a", {
  role: /*
           suggested attribute values:

         | "button" | "option" | "checkbox"
         | "menuitem" | "menuitemcheckbox"
         | "menuitemradio" | "radio"
         | "switch" | "tab" | "treeitem"
```

> This typing is provided curtesy of the amazing [HTMLType](https://github.com/michijs/htmltype) project by [Lucas M. Segurado](https://github.com/lsegurado). **HTMLType** is licensed [MIT](https://github.com/michijs/htmltype/blob/master/LICENSE.md).

## Usage

```ts
import { HTML } from './dom.js'

const div = new HTML.Element('div')

div // HTMLDivElement

HTML.set(div, { class: 'lol yay' })

div.className // "lol yay"

const anchor = HTML.tag('a')

anchor // HTMLAnchorElement

HTML.set(anchor, {
  role: 'button',
})
```

```ts
import { HTML } from './dom.js'

const testAnchor = new HTML.Element('a')

testAnchor // HTMLAnchorElement

HTML.set(testAnchor, {
  role: 'button',
  href: '#fragment',
})

HTML.set(testAnchor, {
  role: 'application', // No overload matches this call. ts(2769)
})
```

---

## Acknowledgements

Code original to this project is licensed CC0-1.0.

Typing from [HTMLType](https://github.com/michijs/htmltype) is licensed [MIT](https://github.com/michijs/htmltype/blob/master/LICENSE.md).
