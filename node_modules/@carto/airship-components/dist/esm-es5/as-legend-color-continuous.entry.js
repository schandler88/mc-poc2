import { r as registerInstance, h } from './core-a69618da.js';
var LegendColorCategory = /** @class */ (function () {
    function class_1(hostRef) {
        registerInstance(this, hostRef);
    }
    class_1.prototype.render = function () {
        if (!this.data || this.data.length === 0) {
            return null;
        }
        if (this.data[0].type === 'polygon') {
            return (h("as-legend-color-continuous-polygon", { data: this.data, orientation: this.orientation }));
        }
        else {
            return (h("as-legend-category", { data: this.data, orientation: this.orientation, width: this.width }));
        }
    };
    Object.defineProperty(class_1, "style", {
        get: function () { return "as-legend-color-continuous{display:block}"; },
        enumerable: true,
        configurable: true
    });
    return class_1;
}());
export { LegendColorCategory as as_legend_color_continuous };
