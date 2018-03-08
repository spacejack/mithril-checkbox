/// <reference types="mithril" />
import * as m from 'mithril';
export interface Attrs {
    /** An id is required to connect the input and label elements */
    id?: string;
    /** Optional input name */
    name?: string;
    /** Optional input value */
    value?: string;
    /** Optional checked state */
    checked?: boolean;
    /** Optional class to apply to containing element */
    class?: string;
    /** Optional input type (default checkbox) */
    type?: string;
    /** Click event handler */
    onclick?(e: MouseEvent): any;
    /** Any other attrs are forwarded to the hidden input element */
    [id: string]: any;
}
declare const _default: m.Component<Attrs, m.Lifecycle<Attrs, {}>>;
export default _default;
