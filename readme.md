# Mithril Custom Checkbox Component

Fully stylable checkbox and radio input components for [Mithril.js](https://mithril.js.org/). Includes TypeScript types.

Try a [live demo here](https://spacejack.github.io/mithril-checkbox/).

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
