import * as m from 'mithril'
import mCheckbox from '../../src'

const sports = [
	{id: 'baseball', text: 'Baseball'},
	{id: 'basketball', text: 'Basketball'},
	{id: 'boxing', text: 'Boxing'},
	{id: 'football', text: 'Football'},
	{id: 'golf', text: 'Golf'},
	{id: 'hockey', text: 'Hockey'},
	{id: 'lacrosse', text: 'Lacrosse'},
	{id: 'rugby', text: 'Rugby'},
	{id: 'skiing', text: 'Skiing'},
	{id: 'swimming', text: 'Swimming'}
]

const countries = [
	{id: 'australia', text: 'Australia'},
	{id: 'canada', text: 'Canada'},
	{id: 'china', text: 'China'},
	{id: 'england', text: 'England'},
	{id: 'finland', text: 'Finland'},
	{id: 'india', text: 'India'},
	{id: 'japan', text: 'Japan'},
	{id: 'kenya', text: 'Kenya'},
	{id: 'mexico', text: 'Mexico'},
	{id: 'russia', text: 'Russia'}
]

const sportIds: string[] = []
let countryId: string | undefined

// Demo component
const demoComponent = {
	view() {
		return m('.demo',
			m('h3', 'Select sports:'),
			m('p',
				'Sports:',
				sportIds.map(sid => m('span', ' ' + sports.find(s => s.id === sid)!.text))
			),
			m('p',
				sports.map(sport => m('div',
					m(mCheckbox,
						{
							type: 'checkbox',
							checked: sportIds.indexOf(sport.id) >= 0,
							key: sport.id,
							onclick (e: Event) {
								const checked = (e.currentTarget as HTMLInputElement).checked
								if (checked) {
									sportIds.push(sport.id)
								} else {
									sportIds.splice(sportIds.indexOf(sport.id), 1)
								}
							}
						},
						sport.text
					)
				))
			),
			m('h3', 'Select a country:'),
			m('p',
				'Country: ',
				countryId ? countries.find(c => c.id === countryId)!.text : ''
			),
			m('p',
				countries.map(country => m('div',
					m(mCheckbox,
						{
							type: 'radio',
							name: 'country',
							checked: countryId === country.id,
							key: country.id,
							onclick() {countryId = country.id}
						},
						country.text
					)
				))
			),
			m('h3', 'Disabled styles:'),
			m('p',
				m('div',
					m(mCheckbox,
						{
							type: 'checkbox',
							disabled: true
						},
						'Disabled checkbox'
					)
				),
				m('div',
					m(mCheckbox,
						{
							type: 'checkbox',
							checked: true,
							disabled: true
						},
						'Disabled, checked checkbox'
					)
				),
				m('div',
					m(mCheckbox,
						{
							type: 'radio',
							disabled: true
						},
						'Disabled radio'
					)
				),
				m('div',
					m(mCheckbox,
						{
							type: 'radio',
							checked: true,
							disabled: true
						},
						'Disabled, checked radio'
					)
				)
			)
		)
	}
}

m.mount(document.getElementById('checkbox-demo')!, demoComponent)
