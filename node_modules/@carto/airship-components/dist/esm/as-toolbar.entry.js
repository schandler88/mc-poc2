import { r as registerInstance, h, g as getElement } from './core-a69618da.js';

const Toolbar = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    componentWillLoad() {
        this.actions = this.element.querySelector('.as-toolbar__actions');
    }
    componentWillUpdate() {
        this.actions = this.element.querySelector('.as-toolbar__actions');
    }
    render() {
        return (h("header", { class: 'as-toolbar' }, this._renderToggleButton(), h("slot", null)));
    }
    _toggleDrawer() {
        this.actions.classList.toggle('as-toolbar__actions--visible');
    }
    _renderToggleButton() {
        if (!this.actions) {
            return;
        }
        return (h("button", { onClick: this._toggleDrawer.bind(this), class: 'as-toolbar__item as-toolbar__toggle' }, h("i", { class: 'as-icon as-icon-hamburger as-title as-m--0' })));
    }
    get element() { return getElement(this); }
    static get style() { return "as-toolbar{display:block;z-index:3}"; }
};

export { Toolbar as as_toolbar };
