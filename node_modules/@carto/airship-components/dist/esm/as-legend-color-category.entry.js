import { r as registerInstance, h } from './core-a69618da.js';

const LegendColorCategory = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        // TODO: check if all values are type: line?
        return (h("as-legend-category", { data: this.data, orientation: this.orientation, width: this.width }));
    }
    static get style() { return "as-legend-color-category{display:block}"; }
};

export { LegendColorCategory as as_legend_color_category };
