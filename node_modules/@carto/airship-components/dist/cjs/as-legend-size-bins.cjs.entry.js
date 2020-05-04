'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-894cddb9.js');

const LegendSizeBins = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
        this.orientation = 'vertical';
        this.width = null;
    }
    render() {
        if (!this.data || this.data.length === 0) {
            return null;
        }
        return this.renderLegend(this.data);
    }
    renderLegend(data) {
        switch (data[0].type) {
            case 'point':
                return core.h("as-legend-size-bins-point", { data: this.data, orientation: this.orientation, width: this.width });
            case 'line':
                return core.h("as-legend-size-bins-line", { data: this.data, orientation: this.orientation, width: this.width });
            default:
                return null;
        }
    }
    static get style() { return "as-legend-size-bins{display:block}"; }
};

exports.as_legend_size_bins = LegendSizeBins;
