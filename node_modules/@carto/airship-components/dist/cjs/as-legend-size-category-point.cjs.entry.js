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
        return core.h("as-legend-size-bins-point", { data: this.data, orientation: this.orientation, width: this.width });
    }
    static get style() { return "as-legend-size-category-point{display:block}"; }
};

exports.as_legend_size_category_point = LegendSizeCategory;
