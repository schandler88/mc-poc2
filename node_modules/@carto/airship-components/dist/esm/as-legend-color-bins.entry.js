import { r as registerInstance, h } from './core-a69618da.js';

const LegendColorBins = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        if (!this.data || this.data.length === 0) {
            return null;
        }
        if (this.data[0].type === 'polygon') {
            return (h("as-legend-color-bins-polygon", { data: this.data, orientation: this.orientation }));
        }
        else {
            return (h("as-legend-category", { data: this.data, orientation: this.orientation, width: this.width }));
        }
    }
    static get style() { return "as-legend-color-bins{display:block}"; }
};

export { LegendColorBins as as_legend_color_bins };
