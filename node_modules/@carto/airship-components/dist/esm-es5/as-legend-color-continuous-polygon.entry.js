import { r as registerInstance, h } from './core-a69618da.js';
var LegendColorContinuousPolygon = /** @class */ (function () {
    function class_1(hostRef) {
        registerInstance(this, hostRef);
        this.orientation = 'vertical';
    }
    class_1.prototype.render = function () {
        var _a;
        var _this = this;
        if (!this.data) {
            return null;
        }
        var outerClasses = (_a = {
                'as-legend-color-continuous-polygon--outer-wrapper': true
            },
            _a["as-legend-color-continuous-polygon--" + this.orientation] = true,
            _a);
        return h("div", { class: outerClasses }, h("div", { class: 'as-legend-color-continuous-polygon--wrapper as-legend-color-continuous-polygon--color' }, this.data.map(function (data, index, arr) { return _this.renderGradientStep(data, index, arr); })), h("div", { class: 'as-legend-color-continuous-polygon--wrapper as-legend-color-continuous-polygon--labels' }, this.data.map(function (data, index, arr) { return _this.renderLabel(data, index, arr); })));
    };
    class_1.prototype.renderGradientStep = function (data, index, arr) {
        if (index === arr.length - 1) {
            return null;
        }
        var start = data.color;
        var end = arr[index + 1].color;
        var direction = this.orientation === 'vertical' ? '.5turn' : '.25turn';
        var style = {
            backgroundImage: "linear-gradient(" + direction + ", " + start + ", " + end + ")"
        };
        return (h("div", { class: 'as-legend-color-continuous-polygon--step', style: style }));
    };
    class_1.prototype.renderLabel = function (data, index, arr) {
        if (this.orientation === 'vertical' && index === 0) {
            return null;
        }
        if (this.orientation === 'horizontal' && index === arr.length - 1) {
            return null;
        }
        return (h("div", { class: 'as-legend-color-continuous-polygon--label' }, h("span", null, data.label)));
    };
    Object.defineProperty(class_1, "style", {
        get: function () { return "as-legend-color-continuous-polygon{--as-legend-color-continuous-polygon--border-color:rgba(0,0,0,0.1);--as-legend-color-continuous-polygon--color:var(--as--color--type-01);display:block}as-legend-color-continuous-polygon .as-legend-color-continuous-polygon--step{-ms-flex:1;flex:1;background-origin:border-box}as-legend-color-continuous-polygon .as-legend-color-continuous-polygon--horizontal .as-legend-color-continuous-polygon--step{height:8px;border-top:1px solid var(--as-legend-color-continuous-polygon--border-color);border-bottom:1px solid var(--as-legend-color-continuous-polygon--border-color)}as-legend-color-continuous-polygon .as-legend-color-continuous-polygon--vertical .as-legend-color-continuous-polygon--step{width:8px;border-right:1px solid var(--as-legend-color-continuous-polygon--border-color);border-left:1px solid var(--as-legend-color-continuous-polygon--border-color)}as-legend-color-continuous-polygon .as-legend-color-continuous-polygon--outer-wrapper{display:-ms-flexbox;display:flex}as-legend-color-continuous-polygon .as-legend-color-continuous-polygon--outer-wrapper.as-legend-color-continuous-polygon--vertical{-ms-flex-direction:row;flex-direction:row}as-legend-color-continuous-polygon .as-legend-color-continuous-polygon--outer-wrapper.as-legend-color-continuous-polygon--horizontal{-ms-flex-direction:column;flex-direction:column}as-legend-color-continuous-polygon .as-legend-color-continuous-polygon--wrapper{display:-ms-flexbox;display:flex}as-legend-color-continuous-polygon .as-legend-color-continuous-polygon--label{-ms-flex:1;flex:1;color:var(--as-legend-color-continuous-polygon--color);font:var(--as--font--caption);text-transform:capitalize;white-space:nowrap}as-legend-color-continuous-polygon .as-legend-color-continuous-polygon--color{-webkit-box-shadow:-1px 0 2px 0 var(--as-legend-color-continuous-polygon--border-color);box-shadow:-1px 0 2px 0 var(--as-legend-color-continuous-polygon--border-color)}as-legend-color-continuous-polygon .as-legend-color-continuous-polygon--vertical .as-legend-color-continuous-polygon--wrapper{-ms-flex-direction:column;flex-direction:column;min-height:300px}as-legend-color-continuous-polygon .as-legend-color-continuous-polygon--vertical .as-legend-color-continuous-polygon--labels{margin-left:8px}as-legend-color-continuous-polygon .as-legend-color-continuous-polygon--vertical .as-legend-color-continuous-polygon--label{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:end;justify-content:flex-end}as-legend-color-continuous-polygon .as-legend-color-continuous-polygon--vertical .as-legend-color-continuous-polygon--step:first-of-type{border-top:1px solid var(--as-legend-color-continuous-polygon--border-color)}as-legend-color-continuous-polygon .as-legend-color-continuous-polygon--vertical .as-legend-color-continuous-polygon--step:last-of-type{border-bottom:1px solid var(--as-legend-color-continuous-polygon--border-color)}as-legend-color-continuous-polygon .as-legend-color-continuous-polygon--horizontal .as-legend-color-continuous-polygon--wrapper{min-width:300px}as-legend-color-continuous-polygon .as-legend-color-continuous-polygon--horizontal .as-legend-color-continuous-polygon--labels{margin-top:8px}as-legend-color-continuous-polygon .as-legend-color-continuous-polygon--horizontal .as-legend-color-continuous-polygon--step:first-of-type{border-left:1px solid var(--as-legend-color-continuous-polygon--border-color)}as-legend-color-continuous-polygon .as-legend-color-continuous-polygon--horizontal .as-legend-color-continuous-polygon--step:last-of-type{border-right:1px solid var(--as-legend-color-continuous-polygon--border-color)}"; },
        enumerable: true,
        configurable: true
    });
    return class_1;
}());
export { LegendColorContinuousPolygon as as_legend_color_continuous_polygon };
