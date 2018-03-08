import * as m from 'mithril'
import mCheckbox from '../../src'

let checked = false
let radioed = false

// Demo component
const demoComponent = {
	view() {
		return m('.demo',
			m('p',
				m(mCheckbox,
					{
						id: 'chk-test',
						type: 'checkbox',
						checked: checked,
						onclick() {checked = !checked}
					},
					'Check Me!'
				)
			),
			m('p',
				m(mCheckbox,
					{
						id: 'rad-test',
						type: 'radio',
						checked: radioed,
						onclick() {radioed = !radioed}
					},
					'Radio Me!'
				)
			)
		)
	}
}

m.mount(document.getElementById('checkbox-demo')!, demoComponent)
