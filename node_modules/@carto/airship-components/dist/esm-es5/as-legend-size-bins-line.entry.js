import { r as registerInstance, h } from './core-a69618da.js';
var LegendSizeBinsLine = /** @class */ (function () {
    function class_1(hostRef) {
        registerInstance(this, hostRef);
        this.orientation = 'vertical';
        this.width = null;
    }
    class_1.prototype.render = function () {
        var _a;
        var _this = this;
        if (!this.data) {
            return null;
        }
        var outerClasses = (_a = {
                'as-legend-size-bins-line--outer-wrapper': true
            },
            _a["as-legend-size-bins-line--" + this.orientation] = true,
            _a);
        var wrapperStyle = {
            width: this.width !== null && this.orientation === 'vertical' ? this.width + "px" : null
        };
        return h("div", { class: outerClasses }, h("div", { style: wrapperStyle, class: 'as-legend-size-bins-line--wrapper as-legend-size-bins-line--color' }, this.data.map(function (d) { return _this.renderStep(d); })), h("div", { class: 'as-legend-size-bins-line--wrapper as-legend-size-bins-line--labels' }, this.data.map(this.renderLabels)));
    };
    class_1.prototype.renderStep = function (data) {
        var _a;
        var prop = this.orientation === 'vertical' ? 'width' : 'height';
        var style = (_a = {
                background: data.color
            },
            _a[prop] = data.width + "px",
            _a);
        return (h("div", { class: 'as-legend-size-bins-line--step', style: style }));
    };
    class_1.prototype.renderLabels = function (data) {
        return (h("div", { class: 'as-legend-size-bins-line--label' }, h("span", null, data.label)));
    };
    Object.defineProperty(class_1, "style", {
        get: function () { return "as-legend-size-bins-line{--as-legend-size-bins-line--border-color:rgba(0,0,0,0.1);--as-legend-size-bins-line--color:var(--as--color--type-01);display:block}as-legend-size-bins-line .as-legend-size-bins-line--outer-wrapper{display:-ms-flexbox;display:flex}as-legend-size-bins-line .as-legend-size-bins-line--outer-wrapper.as-legend-size-bins-line--vertical{-ms-flex-direction:row;flex-direction:row}as-legend-size-bins-line .as-legend-size-bins-line--outer-wrapper.as-legend-size-bins-line--horizontal{-ms-flex-direction:column;flex-direction:column}as-legend-size-bins-line .as-legend-size-bins-line--wrapper{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}as-legend-size-bins-line .as-legend-size-bins-line--labels{-ms-flex-align:start;align-items:flex-start}as-legend-size-bins-line .as-legend-size-bins-line--horizontal .as-legend-size-bins-line--wrapper{min-width:300px}as-legend-size-bins-line .as-legend-size-bins-line--horizontal .as-legend-size-bins-line--labels{margin-top:8px}as-legend-size-bins-line .as-legend-size-bins-line--label{-ms-flex:1;flex:1;color:var(--as-legend-size-bins-line--color);font:var(--as--font--caption);text-align:center;text-transform:capitalize;white-space:nowrap}as-legend-size-bins-line .as-legend-size-bins-line--vertical .as-legend-size-bins-line--wrapper{-ms-flex-direction:column;flex-direction:column;min-height:300px}as-legend-size-bins-line .as-legend-size-bins-line--vertical .as-legend-size-bins-line--label{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center}as-legend-size-bins-line .as-legend-size-bins-line--vertical .as-legend-size-bins-line--labels{margin-left:8px}as-legend-size-bins-line .as-legend-size-bins-line--step{-ms-flex:1;flex:1;border:1px solid var(--as-legend-size-bins-line--border-color);-webkit-box-shadow:-1px 0 2px 0 var(--as-legend-size-bins-line--border-color);box-shadow:-1px 0 2px 0 var(--as-legend-size-bins-line--border-color)}as-legend-size-bins-line .as-legend-size-bins-line--horizontal .as-legend-size-bins-line--step{height:8px}as-legend-size-bins-line .as-legend-size-bins-line--vertical .as-legend-size-bins-line--step{width:8px}"; },
        enumerable: true,
        configurable: true
    });
    return class_1;
}());
export { LegendSizeBinsLine as as_legend_size_bins_line };
