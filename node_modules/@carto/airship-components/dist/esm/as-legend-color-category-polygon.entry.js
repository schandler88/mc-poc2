import { r as registerInstance, h } from './core-a69618da.js';

const LegendColorCategoryPolygon = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        // TODO: check if all values are type: polygon?
        return (h("as-legend-category", { data: this.data, orientation: this.orientation, width: this.width }));
    }
    static get style() { return "as-legend-color-category-polygon{display:block}"; }
};

export { LegendColorCategoryPolygon as as_legend_color_category_polygon };
