import { r as registerInstance, h } from './core-a69618da.js';

const WidgetLegend = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return Object.keys(this.data).map((key) => {
            return h("div", { class: 'widget-legend-item' }, h("span", { class: 'widget-legend-item__box', style: { background: this.data[key] } }), h("span", { class: 'widget-legend-item__label as-body' }, key));
        });
    }
    static get style() { return "as-widget-legend{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;margin:0}as-widget-legend .widget-legend-item{display:-ms-flexbox;display:flex;-ms-flex-line-pack:center;align-content:center;-ms-flex-align:center;align-items:center}as-widget-legend .widget-legend-item__box{display:inline-block;width:12px;height:12px;margin:0 4px 0 0}as-widget-legend .widget-legend-item__label{margin:0 8px 0 0}"; }
};

export { WidgetLegend as as_widget_legend };
