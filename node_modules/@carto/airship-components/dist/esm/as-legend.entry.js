import { r as registerInstance, h } from './core-a69618da.js';

const Legend = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", { class: 'as-legend--wrapper' }, this.renderHeader(), this.renderContent()));
    }
    renderContent() {
        if (this.loading) {
            return null;
        }
        return [
            h("div", { class: 'as-legend--legends-slot' }, h("slot", { name: 'legends' })),
            h("slot", { name: 'footer' })
        ];
    }
    renderHeader() {
        if (this.heading || this.description) {
            return h("as-widget-header", { header: this.heading, subheader: this.description });
        }
    }
    static get style() { return "as-legend{--as-legend--color:var(--as--color--type-01);--as-legend--background-color:var(--as--color--ui-01);--as-legend--footer-font-size:12px;--as-legend--footer-color:var(--as--color--type-01);--as-legend--footer-margin-top:12px;--as-legend--padding:12px;background:var(--as-legend--background-color);color:var(--as-legend--color)}as-legend .as-legend--wrapper{padding:var(--as-legend--padding)}as-legend [slot=footer]{display:block;margin-top:var(--as-legend--footer-margin-top);color:var(--as-legend--footer-color);font-family:var(--as--font-family--base);font-size:var(--as-legend--footer-font-size)}as-legend .as-legend--legends-slot{overflow:auto}"; }
};

export { Legend as as_legend };
