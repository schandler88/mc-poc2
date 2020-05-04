'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-894cddb9.js');

const LegendColorBins = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
    }
    render() {
        if (!this.data || this.data.length === 0) {
            return null;
        }
        if (this.data[0].type === 'polygon') {
            return (core.h("as-legend-color-bins-polygon", { data: this.data, orientation: this.orientation }));
        }
        else {
            return (core.h("as-legend-category", { data: this.data, orientation: this.orientation, width: this.width }));
        }
    }
    static get style() { return "as-legend-color-bins{display:block}"; }
};

exports.as_legend_color_bins = LegendColorBins;
