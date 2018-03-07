import * as m from 'mithril'

export interface Attrs {
	/** An id is required to connect the input and label elements */
	id: string
	/** Optional input name */
	name?: string
	/** Optional input value */
	value?: string
	/** Optional checked state */
	checked?: boolean
	/** Optional class to apply to containing element */
	class?: string
	/** Click event handler */
	onclick?(e: MouseEvent): any
	/** Any other attrs are forwarded to the hidden input element */
	[id: string]: any
}

export default {
	view ({attrs, children}) {
		const inputAttrs = {...attrs, type: 'checkbox', class: undefined}
		return m('label.mithril-checkbox',
			{
				class: attrs.class,
				for: inputAttrs.id
			},
			m('input.mithril-checkbox-input', inputAttrs),
			m('div.mithril-checkbox-shape'),
			children
		)
	}
} as m.Component<Attrs>
