import { r as registerInstance, h } from './core-a69618da.js';
var LegendColorBinsPoint = /** @class */ (function () {
    function class_1(hostRef) {
        registerInstance(this, hostRef);
    }
    class_1.prototype.render = function () {
        // TODO: check if all values are type: point?
        return (h("as-legend-category", { data: this.data, orientation: this.orientation, width: this.width }));
    };
    Object.defineProperty(class_1, "style", {
        get: function () { return "as-legend-color-bins-point{display:block}"; },
        enumerable: true,
        configurable: true
    });
    return class_1;
}());
export { LegendColorBinsPoint as as_legend_color_bins_point };
