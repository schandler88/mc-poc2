'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-894cddb9.js');

const LegendColorCategoryPoint = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
    }
    render() {
        // TODO: check if all values are type: point?
        return (core.h("as-legend-category", { data: this.data, orientation: this.orientation, width: this.width }));
    }
    static get style() { return "as-legend-color-category-point{display:block}"; }
};

exports.as_legend_color_category_point = LegendColorCategoryPoint;
