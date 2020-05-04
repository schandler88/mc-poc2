import { r as registerInstance, h } from './core-a69618da.js';
var LegendSizeContinuous = /** @class */ (function () {
    function class_1(hostRef) {
        registerInstance(this, hostRef);
        this.orientation = 'vertical';
        this.scale = 1;
    }
    class_1.prototype.render = function () {
        if (!this.data || this.data.length === 0) {
            return null;
        }
        var classes = {
            'as-legend-size-continuous--overflow': this.data[0].type === 'line'
        };
        return h("div", { class: classes }, this.renderLegend(this.data));
    };
    class_1.prototype.renderLegend = function (data) {
        switch (data[0].type) {
            case 'point':
                return h("as-legend-size-continuous-point", { data: this.data, orientation: this.orientation, scale: this.scale });
            case 'line':
                return h("as-legend-size-continuous-line", { data: this.data, orientation: this.orientation });
            default:
                return null;
        }
    };
    Object.defineProperty(class_1, "style", {
        get: function () { return "as-legend-size-continuous{display:block}as-legend-size-continuous .as-legend-size-continuous--overflow{overflow:hidden}"; },
        enumerable: true,
        configurable: true
    });
    return class_1;
}());
export { LegendSizeContinuous as as_legend_size_continuous };
