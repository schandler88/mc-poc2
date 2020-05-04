'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-894cddb9.js');

const WidgetLegend = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
    }
    render() {
        return Object.keys(this.data).map((key) => {
            return core.h("div", { class: 'widget-legend-item' }, core.h("span", { class: 'widget-legend-item__box', style: { background: this.data[key] } }), core.h("span", { class: 'widget-legend-item__label as-body' }, key));
        });
    }
    static get style() { return "as-widget-legend{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;margin:0}as-widget-legend .widget-legend-item{display:-ms-flexbox;display:flex;-ms-flex-line-pack:center;align-content:center;-ms-flex-align:center;align-items:center}as-widget-legend .widget-legend-item__box{display:inline-block;width:12px;height:12px;margin:0 4px 0 0}as-widget-legend .widget-legend-item__label{margin:0 8px 0 0}"; }
};

exports.as_widget_legend = WidgetLegend;
