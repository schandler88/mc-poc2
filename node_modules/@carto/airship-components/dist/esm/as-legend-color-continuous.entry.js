import { r as registerInstance, h } from './core-a69618da.js';

const LegendColorCategory = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        if (!this.data || this.data.length === 0) {
            return null;
        }
        if (this.data[0].type === 'polygon') {
            return (h("as-legend-color-continuous-polygon", { data: this.data, orientation: this.orientation }));
        }
        else {
            return (h("as-legend-category", { data: this.data, orientation: this.orientation, width: this.width }));
        }
    }
    static get style() { return "as-legend-color-continuous{display:block}"; }
};

export { LegendColorCategory as as_legend_color_continuous };
