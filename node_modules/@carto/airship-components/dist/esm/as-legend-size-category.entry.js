import { r as registerInstance, h } from './core-a69618da.js';

const LegendSizeCategory = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.orientation = 'vertical';
        this.width = null;
    }
    render() {
        if (!this.data || this.data.length === 0) {
            return null;
        }
        switch (this.data[0].type) {
            case 'point':
                return h("as-legend-size-bins-point", { data: this.data, orientation: this.orientation, width: this.width });
            case 'line':
                return h("as-legend-size-category-line", { data: this.data, orientation: this.orientation });
            default:
                return null;
        }
    }
    static get style() { return "as-legend-size-category{display:block}"; }
};

export { LegendSizeCategory as as_legend_size_category };
