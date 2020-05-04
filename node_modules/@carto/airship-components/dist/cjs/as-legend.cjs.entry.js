'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-894cddb9.js');

const Legend = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
    }
    render() {
        return (core.h("div", { class: 'as-legend--wrapper' }, this.renderHeader(), this.renderContent()));
    }
    renderContent() {
        if (this.loading) {
            return null;
        }
        return [
            core.h("div", { class: 'as-legend--legends-slot' }, core.h("slot", { name: 'legends' })),
            core.h("slot", { name: 'footer' })
        ];
    }
    renderHeader() {
        if (this.heading || this.description) {
            return core.h("as-widget-header", { header: this.heading, subheader: this.description });
        }
    }
    static get style() { return "as-legend{--as-legend--color:var(--as--color--type-01);--as-legend--background-color:var(--as--color--ui-01);--as-legend--footer-font-size:12px;--as-legend--footer-color:var(--as--color--type-01);--as-legend--footer-margin-top:12px;--as-legend--padding:12px;background:var(--as-legend--background-color);color:var(--as-legend--color)}as-legend .as-legend--wrapper{padding:var(--as-legend--padding)}as-legend [slot=footer]{display:block;margin-top:var(--as-legend--footer-margin-top);color:var(--as-legend--footer-color);font-family:var(--as--font-family--base);font-size:var(--as-legend--footer-font-size)}as-legend .as-legend--legends-slot{overflow:auto}"; }
};

exports.as_legend = Legend;
