import * as m from 'mithril'

export interface Attrs {
	/** An id is required to connect the input and label elements */
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

export default {
	view ({attrs, children}) {
		const inputAttrs = Object.assign(
			{}, attrs, {type: attrs.type || 'checkbox', class: undefined}
		)
		const containerAttrs: {[id: string]: any} = {}
		if (attrs.id !== undefined) containerAttrs.for = attrs.id
		if (attrs.class !== undefined) containerAttrs.class = attrs.class
		return m('label.mithril-checkbox',
			containerAttrs,
			m('input', inputAttrs),
			m('div.mithril-checkbox-shape'),
			children
		)
	}
} as m.Component<Attrs>
