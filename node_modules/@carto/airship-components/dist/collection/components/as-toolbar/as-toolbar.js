import { h } from "@stencil/core";
/**
 * Toolbar
 *
 * @export
 * @class Toolbar
 */
export class Toolbar {
    componentWillLoad() {
        this.actions = this.element.querySelector('.as-toolbar__actions');
    }
    componentWillUpdate() {
        this.actions = this.element.querySelector('.as-toolbar__actions');
    }
    render() {
        return (h("header", { class: 'as-toolbar' },
            this._renderToggleButton(),
            h("slot", null)));
    }
    _toggleDrawer() {
        this.actions.classList.toggle('as-toolbar__actions--visible');
    }
    _renderToggleButton() {
        if (!this.actions) {
            return;
        }
        return (h("button", { onClick: this._toggleDrawer.bind(this), class: 'as-toolbar__item as-toolbar__toggle' },
            h("i", { class: 'as-icon as-icon-hamburger as-title as-m--0' })));
    }
    static get is() { return "as-toolbar"; }
    static get originalStyleUrls() { return {
        "$": ["./as-toolbar.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["as-toolbar.css"]
    }; }
    static get elementRef() { return "element"; }
}
