import * as m from 'mithril'

export interface Attrs {
	/** Optional input id */
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

const MithrilCheckbox: m.Component<Attrs> = {
	// Separate label attributes and input attributes
	// and remove `key` attribute since it should not
	// be used within this view.
	view ({attrs: {
		key, class: inputClass, className, for: idFor, style,
		...inputAttrs
	}, children}) {
		// Build label attrs object
		const labelAttrs: {[id: string]: any} = {}
		if (className !== undefined) {
			labelAttrs.className = className
		} else if (inputClass !== undefined) {
			labelAttrs.class = inputClass
		}
		if (style !== undefined) {
			labelAttrs.style = style
		}
		if (idFor !== undefined) {
			labelAttrs.for = idFor
		}
		return m('label.mithril-checkbox',
			labelAttrs,
			m('input', inputAttrs),
			m('div.mithril-checkbox-shape'),
			m('span.mithril-checkbox-children', children)
		)
	}
}

export default MithrilCheckbox
