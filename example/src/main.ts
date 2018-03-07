import * as m from 'mithril'
import mCheckbox from '../../src'

let checked = false

// Demo component
const demoComponent = {
	view() {
		return m('.demo',
			m(mCheckbox,
				{
					id: 'chk-test',
					checked,
					onclick() {checked = !checked}
				},
				'Click Me'
			)
		)
	}
}

m.mount(document.getElementById('checkbox-demo')!, demoComponent)
