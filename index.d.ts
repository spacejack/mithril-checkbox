import * as m from 'mithril';
export interface Attrs {
    /** Optional input id. If provided will also be applied to label.for attribute. */
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
declare const MithrilCheckbox: m.Component<Attrs>;
export default MithrilCheckbox;
