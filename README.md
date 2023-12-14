# DOM <img src="https://jonneal.dev/js-logo.svg" alt="" width="90" height="90" align="right">

[![npm version][npm-img]][npm-url]
[![bundle size][bundlejs-img]][bundlejs-url]
[![npm usage][usage-img]][npm-url]

**DOM** lets you create and transform [DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model) objects with a class-like JavaScript API.

```ts
new HTML.Element("div")
// vs document.createElement("div")

new HTML.Element('a', { href: '/path/to/some/page' })
// vs __el = document.createElement('a')
//    __el.setAttribute('href', '/path/to/some/page')
```

### Usage

#### Node Package Manager

```shell
npm install @jsxtools/dom
```

#### Javascript

```js
import { HTML, SVG, MathML } from 'http://unpkg.com/@jsxtools/dom'
```

```js
// add HTML, SVG, & MathML to the global object
import '@jsxtools/dom/global'
```

#### HTML

```html
<script
  type="module"
  src="https://cdn.jsdelivr.net/npm/@jsxtools/dom"
></script>
```

```html
<!-- add HTML, SVG, & MathML to the global object -->
<script
  src="https://cdn.jsdelivr.net/npm/@jsxtools/dom/global.js"
></script>
```

---

## DOM API

The **`HTML.Element`**, **`SVG.Element`**, and **`MathML.Element`** classes create elements by tag name.

```js
const div = new HTML.Element('div') // HTMLDivElement
```

### Set

The **`set`** method assigns attributes or children to the given element,
returning the given element.

```js
const anchorLink = new HTML.Element('a') // HTMLAnchorElement

HTML.set(anchorLink, { href: '/path/to/some/page' })
```

```js
const button = new HTML.Element('button') // HTMLButtonElement

HTML.set(button, { type: 'button' },
  'Download',
  new HTML.Element('img', { src: '/path/to/presentational-image', 'aria-hidden': 'true' })
)
```

The **`set`** method treats void and boolean values as attribute toggles.

```js
const button = new HTML.Element('button') // HTMLButtonElement

HTML.assign(button, { disabled: true }) // <button disabled></button>
```

## Generating MathML Elements

The `MathML` class creates [MathML](https://developer.mozilla.org/en-US/docs/Web/MathML) elements.

```js
new MathML('math', { display: 'inline' },
  new MathML('mfrac',
    new MathML('msup',
      new MathML('mi', 'π'),
      new MathML('mn', '2')
    ),
    new MathML('mn', '6')
  )
)
```

## Generating SVG Elements

The `SVG` class creates [SVG](https://developer.mozilla.org/en-US/docs/Web/SVG) elements.

```js
new SVG('svg', { width: 150, height: 100, viewBox: '0 0 300 200' },
  new SVG('rect', { width: '100%', height: '100%', fill: 'red' }),
  new SVG('circle', { cx: 150, cy: 100, r: 80, fill: 'green' }),
  new SVG('text', { x: 150, y: 125, 'font-size': 60, 'text-anchor': 'middle', fill: 'white' },
    'SVG'
  )
)
```

## Augmenting Native Elements

The **`HTML.Element`**, **`SVG.Element`**, and **`MathML.Element`** classes can be used to extend native element, allowing authors to create native elements with special abilities.

```js
class CustomDivElement extends HTML.Element {
  get special() {
    return 'ability'
  }
}

const customDiv = new CustomDivElement('div');

customDiv.special // "ability"
```

## Strong Typing

Detailed typing is provided for the **`HTML.Element`**, **`SVG.Element`**, and **`MathML.Element`** classes, as well as the `HTML.set`, `SVG.set`, and `MathML.set` methods.

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

> Typing is provided curtesy of the amazing [HTMLType](https://github.com/michijs/htmltype) project by [Lucas M. Segurado](https://github.com/lsegurado). **HTMLType** is licensed [MIT](https://github.com/michijs/htmltype/blob/master/LICENSE.md).

---

## File size

**DOM** minifies to 614 bytes before compression.

| Package    | Compression | Filesize |
|:---------- |:----------- | --------:|
| **Module** | **none**    |     646B |
|            | **gzip**    |     423B |
|            | **brotli**  |     352B |
| **Common** | **none**    |     633B |
|            | **gzip**    |     429B |
|            | **brotli**  |     356B |
| **Global** | **none**    |     614B |
|            | **gzip**    |     420B |
|            | **brotli**  |     349B |

---

## Acknowledgements

Code original to this project is licensed CC0-1.0.

Typing from [HTMLType](https://github.com/michijs/htmltype) is licensed [MIT](https://github.com/michijs/htmltype/blob/master/LICENSE.md).

[npm-url]: https://www.npmjs.com/package/@jsxtools/dom
[bundlejs-url]: https://bundlejs.com/?bundle&q=@jsxtools/dom

[npm-img]: https://img.shields.io/npm/v/@jsxtools/dom?color=%23444&label=&labelColor=%23CB0000&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjE1MCAxNTAgNDAwIDQwMCIgZmlsbD0iI0ZGRiI+PHBhdGggZD0iTTE1MCA1NTBoMjAwVjI1MGgxMDB2MzAwaDEwMFYxNTBIMTUweiIvPjwvc3ZnPg==&style=for-the-badge
[bundlejs-img]: https://img.shields.io/bundlejs/size/%40jsxtools%2Fdom?style=for-the-badge
[usage-img]: https://img.shields.io/badge/dynamic/json?url=https://api.npmjs.org/downloads/point/last-week/@jsxtools/dom&query=downloads&label=⇓+week&color=%23444&labelColor=%23EEd100&style=for-the-badge
