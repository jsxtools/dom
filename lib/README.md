# DOM <img src="https://jonneal.dev/js-logo.svg" alt="" width="90" height="90" align="right">

[![npm version][npm-img]][npm-url]
[![bundle size][bundlejs-img]][bundlejs-url]
[![npm usage][usage-img]][npm-url]

**DOM** is used to transform [DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model) objects in a class-like JavaScript API.

```ts
new HTML("div")
// vs document.createElement("div")
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

The **`HTML`**, **`SVG`**, and **`MathML`** classes can be used to create elements by tag name.

```js
const div = new HTML('div') // HTMLDivElement
```

### Assign

The **`assign`** method can be used to assign attributes to elements.
It will always return the assigned element.

```js
const anchorLink = new HTML('a') // HTMLAnchorElement

HTML.assign(anchorLink, { href: '/path/to/another/page' })
```

This method can also used to append children.

```js
const button = new HTML('button') // HTMLButtonElement

HTML.assign(button, { type: 'button' },
  'Download',
  new HTML('img', { src: '/path/to/presentational-image', 'aria-hidden': 'true' })
)
```

## Generating MathML Elements

The `MathML` class can be used to create [MathML](https://developer.mozilla.org/en-US/docs/Web/MathML) elements.

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

The `SVG` class can be used to create [SVG](https://developer.mozilla.org/en-US/docs/Web/SVG) elements.

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

The **`HTML`**, **`SVG`**, and **`MathML`** classes can be used to extend native element, allowing authors to create native elements with special abilities.

```js
class CustomDivElement extends HTML {
  get special() {
    return 'ability'
  }
}

const customDiv = new CustomDivElement('div');

customDiv.special // "ability"
```

## Strong Typing

Detailed typing is provided for the **`HTML`**, **`SVG`**, and **`MathML`** classes, as well as the `assign` method.

```rs
new HTML("a", {
  h /*
       suggested attribute names:

     | "href" | "hidden" | "hreflang"
     | "aria-haspopup" | "aria-hidden"
```

```rs
new HTML("a", {
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

**DOM** minifies to 528 bytes before compression.

| Compression | Filesize |
|:----------- | --------:|
| **Brotli**  |     428B |
| **Deflate** |     480B |
| **Gzip**    |     504B |

---

## Acknowledgements

Code original to this project is licensed CC0-1.0.

Typing from [HTMLType](https://github.com/michijs/htmltype) is licensed [MIT](https://github.com/michijs/htmltype/blob/master/LICENSE.md).

[npm-url]: https://www.npmjs.com/package/@jsxtools/dom
[bundlejs-url]: https://bundlejs.com/?bundle&q=@jsxtools/dom

[npm-img]: https://img.shields.io/npm/v/@jsxtools/dom?color=%23444&label=&labelColor=%23CB0000&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjE1MCAxNTAgNDAwIDQwMCIgZmlsbD0iI0ZGRiI+PHBhdGggZD0iTTE1MCA1NTBoMjAwVjI1MGgxMDB2MzAwaDEwMFYxNTBIMTUweiIvPjwvc3ZnPg==&style=for-the-badge
[bundlejs-img]: https://img.shields.io/badge/dynamic/json?url=https://bundlejs.com/api?q=@jsxtools/dom&query=size.totalCompressedSize&color=%23444&labelColor=%233B82F6&label=&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA3MDAgNzAwIiBmaWxsPSIjRkZGIj4KCTxwYXRoIGQ9Ik0xNDYgMkExNzEgMTcxIDAgMCAwIDMgMTM5bC0yIDExdjQwMmwyIDExYzE1IDcyIDcxIDEyNSAxNDMgMTM2bDIwOSAxIDE5OS0xIDktMmM3MC0xNiAxMTktNjYgMTM0LTEzNWwyLTEwVjE1MGwtMi0xMkExNzEgMTcxIDAgMCAwIDU2MiAzbC0xMC0yLTE5OS0xQzE4NyAwIDE1MyAwIDE0NiAyem0xODEgMjUxdjM2bDctM2MxMy02IDMzLTkgNTAtNyA0MSA1IDcwIDM0IDgwIDc4IDIgMTIgMiA0MSAwIDUzLTUgMjItMTMgMzgtMjcgNTJhODIgODIgMCAwIDEtNjMgMjZjLTE1IDAtMTkgMC0yNS0yLTEwLTItMTctNi0yNC0xMGwtNS0zdjExaC00NVYyMTdoNTJ2MzZ6bTI5IDcxYy0yMCAzLTMyIDE5LTM1IDQ4LTMgMjUgMyA0OCAxNCA2MCA1IDYgMTMgMTAgMjMgMTEgMjUgNCA0NC05IDUxLTM2bDMtMTljMC0xNy0xLTI3LTctMzktOS0xOS0yNi0yOC00OS0yNXoiLz4KPC9zdmc+&style=for-the-badge
[usage-img]: https://img.shields.io/badge/dynamic/json?url=https://api.npmjs.org/downloads/point/last-week/@jsxtools/dom&query=downloads&label=⇓+week&color=%23444&labelColor=%23EEd100&style=for-the-badge
