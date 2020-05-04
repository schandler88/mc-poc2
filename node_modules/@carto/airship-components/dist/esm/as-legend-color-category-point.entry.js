import { r as registerInstance, h } from './core-a69618da.js';

const LegendColorCategoryPoint = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        // TODO: check if all values are type: point?
        return (h("as-legend-category", { data: this.data, orientation: this.orientation, width: this.width }));
    }
    static get style() { return "as-legend-color-category-point{display:block}"; }
};

export { LegendColorCategoryPoint as as_legend_color_category_point };
