'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-894cddb9.js');

const LegendSizeCategory = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
        this.orientation = 'vertical';
        this.width = null;
    }
    render() {
        if (!this.data || this.data.length === 0) {
            return null;
        }
        switch (this.data[0].type) {
            case 'point':
                return core.h("as-legend-size-bins-point", { data: this.data, orientation: this.orientation, width: this.width });
            case 'line':
                return core.h("as-legend-size-category-line", { data: this.data, orientation: this.orientation });
            default:
                return null;
        }
    }
    static get style() { return "as-legend-size-category{display:block}"; }
};

exports.as_legend_size_category = LegendSizeCategory;
