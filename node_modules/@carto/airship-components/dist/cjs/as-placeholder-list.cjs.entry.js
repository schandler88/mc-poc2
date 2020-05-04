'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-894cddb9.js');

const LoadingBar = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
    }
    render() {
        return [
            this.renderBarSection(),
            this.renderBarSection(),
            this.renderBarSection(),
            this.renderBarSection(),
            this.renderBarSection()
        ];
    }
    renderBarSection() {
        const barPercentage = Math.trunc(Math.random() * 60) + 40;
        return (core.h("div", { class: 'placeholder-list__items' }, core.h("as-placeholder-bar", { class: 'placeholder-list__item placeholder-list__item--first', height: '12px', width: `${barPercentage}%` }), core.h("as-placeholder-bar", { class: 'placeholder-list__item', height: '4px', width: '100%' })));
    }
    static get style() { return ".placeholder-list__items:not(:last-child){margin-bottom:12px}.placeholder-list__item{display:block}.placeholder-list__item.placeholder-list__item--first{margin-bottom:8px}"; }
};

exports.as_placeholder_list = LoadingBar;
