import { r as registerInstance, h } from './core-a69618da.js';

const LegendColorBinsLine = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        // TODO: check if all values are type: line?
        return (h("as-legend-category", { data: this.data, orientation: this.orientation, width: this.width }));
    }
    static get style() { return "as-legend-color-bins-line{display:block}"; }
};

export { LegendColorBinsLine as as_legend_color_bins_line };
