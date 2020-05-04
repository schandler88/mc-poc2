'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-894cddb9.js');

const LegendColorCategory = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
    }
    render() {
        if (!this.data || this.data.length === 0) {
            return null;
        }
        if (this.data[0].type === 'polygon') {
            return (core.h("as-legend-color-continuous-polygon", { data: this.data, orientation: this.orientation }));
        }
        else {
            return (core.h("as-legend-category", { data: this.data, orientation: this.orientation, width: this.width }));
        }
    }
    static get style() { return "as-legend-color-continuous{display:block}"; }
};

exports.as_legend_color_continuous = LegendColorCategory;
