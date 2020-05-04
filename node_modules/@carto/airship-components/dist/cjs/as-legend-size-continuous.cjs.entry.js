'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-894cddb9.js');

const LegendSizeContinuous = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
        this.orientation = 'vertical';
        this.scale = 1;
    }
    render() {
        if (!this.data || this.data.length === 0) {
            return null;
        }
        const classes = {
            'as-legend-size-continuous--overflow': this.data[0].type === 'line'
        };
        return core.h("div", { class: classes }, this.renderLegend(this.data));
    }
    renderLegend(data) {
        switch (data[0].type) {
            case 'point':
                return core.h("as-legend-size-continuous-point", { data: this.data, orientation: this.orientation, scale: this.scale });
            case 'line':
                return core.h("as-legend-size-continuous-line", { data: this.data, orientation: this.orientation });
            default:
                return null;
        }
    }
    static get style() { return "as-legend-size-continuous{display:block}as-legend-size-continuous .as-legend-size-continuous--overflow{overflow:hidden}"; }
};

exports.as_legend_size_continuous = LegendSizeContinuous;
