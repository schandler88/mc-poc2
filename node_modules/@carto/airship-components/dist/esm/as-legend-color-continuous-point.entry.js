import { r as registerInstance, h } from './core-a69618da.js';

const LegendColorBinsPoint = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        // TODO: check if all values are type: point?
        return (h("as-legend-category", { data: this.data, orientation: this.orientation, width: this.width }));
    }
    static get style() { return "as-legend-color-continuous-point{display:block}"; }
};

export { LegendColorBinsPoint as as_legend_color_continuous_point };
