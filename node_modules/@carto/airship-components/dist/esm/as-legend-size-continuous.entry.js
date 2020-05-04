import { r as registerInstance, h } from './core-a69618da.js';

const LegendSizeContinuous = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.orientation = 'vertical';
        this.scale = 1;
    }
    render() {
        if (!this.data || this.data.length === 0) {
            return null;
        }
        const classes = {
            'as-legend-size-continuous--overflow': this.data[0].type === 'line'
        };
        return h("div", { class: classes }, this.renderLegend(this.data));
    }
    renderLegend(data) {
        switch (data[0].type) {
            case 'point':
                return h("as-legend-size-continuous-point", { data: this.data, orientation: this.orientation, scale: this.scale });
            case 'line':
                return h("as-legend-size-continuous-line", { data: this.data, orientation: this.orientation });
            default:
                return null;
        }
    }
    static get style() { return "as-legend-size-continuous{display:block}as-legend-size-continuous .as-legend-size-continuous--overflow{overflow:hidden}"; }
};

export { LegendSizeContinuous as as_legend_size_continuous };
