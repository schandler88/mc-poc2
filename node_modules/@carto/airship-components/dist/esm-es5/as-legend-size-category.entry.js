import { r as registerInstance, h } from './core-a69618da.js';
var LegendSizeCategory = /** @class */ (function () {
    function class_1(hostRef) {
        registerInstance(this, hostRef);
        this.orientation = 'vertical';
        this.width = null;
    }
    class_1.prototype.render = function () {
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
    };
    Object.defineProperty(class_1, "style", {
        get: function () { return "as-legend-size-category{display:block}"; },
        enumerable: true,
        configurable: true
    });
    return class_1;
}());
export { LegendSizeCategory as as_legend_size_category };
