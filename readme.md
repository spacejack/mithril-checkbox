# Mithril Custom Checkbox Component

Fully stylable checkbox and radio input components for [Mithril.js](https://mithril.js.org/). Includes TypeScript types.

Try a [live demo here](https://spacejack.github.io/mithril-checkbox/).

## Install:

    npm install mithril-checkbox

(TypeScript types are included.)

You will need to include the css file for some basic working styles.

Using PostCSS with [postcss-import](https://github.com/postcss/postcss-import) allows you to import the stylesheet from `node_modules`:

```css
@import "mithril-checkbox";
```

If you're using a sass compiler, you can add:

```scss
@import "node_modules/mithril-checkbox/index";
```

to one of your sass files.

Otherwise you can copy the `node_modules/mithril-checkbox/index.css` file to your project and add it to your html page.

Example use:

```javascript
import mCheckbox from 'mithril-checkbox'
// var mCheckbox = require('mithril-checkbox').default

let checked = false
let radioed = false

m('.app',
  // checkbox
  m(mCheckbox,
    {
      type: 'checkbox',
      checked: checked,
        onclick() {checked = !checked}
    },
    'Check me'
  ),
  // radio button
  m(mCheckbox,
    {
      type: 'radio',
      checked: radioed,
        onclick() {radioed = !radioed}
    },
    'Radio me'
  )
)
```

See the example source in the git repo for more usage examples.

## All Component Options:

(see `src/index.ts`)

```typescript
interface Attrs {
  /** Optional input id. If provided will also be applied to label.for attribute. */
  id?: string
  /** Optional input name */
  name?: string
  /** Optional input value */
  value?: string
  /** Optional checked state */
  checked?: boolean
  /** Optional class to apply to containing element */
  class?: string
  /** Optional input type (default checkbox) */
  type?: string
  /** Click event handler */
  onclick?(e: MouseEvent): any
  /** Any other attrs are forwarded to the hidden input element */
  [id: string]: any
}
```

## Development Install:

First git clone this repo. Then:

    npm install

## Build module

    npm run build

## Serve, compile & watch example app:

    npm start

Then go to http://localhost:3000/ in your browser.
