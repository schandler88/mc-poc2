'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-894cddb9.js');

const Toolbar = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
    }
    componentWillLoad() {
        this.actions = this.element.querySelector('.as-toolbar__actions');
    }
    componentWillUpdate() {
        this.actions = this.element.querySelector('.as-toolbar__actions');
    }
    render() {
        return (core.h("header", { class: 'as-toolbar' }, this._renderToggleButton(), core.h("slot", null)));
    }
    _toggleDrawer() {
        this.actions.classList.toggle('as-toolbar__actions--visible');
    }
    _renderToggleButton() {
        if (!this.actions) {
            return;
        }
        return (core.h("button", { onClick: this._toggleDrawer.bind(this), class: 'as-toolbar__item as-toolbar__toggle' }, core.h("i", { class: 'as-icon as-icon-hamburger as-title as-m--0' })));
    }
    get element() { return core.getElement(this); }
    static get style() { return "as-toolbar{display:block;z-index:3}"; }
};

exports.as_toolbar = Toolbar;
