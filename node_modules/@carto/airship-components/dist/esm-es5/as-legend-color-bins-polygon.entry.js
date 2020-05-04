import { r as registerInstance, h } from './core-a69618da.js';
var LegendColorBinsPolygon = /** @class */ (function () {
    function class_1(hostRef) {
        registerInstance(this, hostRef);
        this.orientation = 'vertical';
    }
    class_1.prototype.render = function () {
        var _a;
        if (!this.data) {
            return null;
        }
        var outerClasses = (_a = {
                'as-legend-color-bins-polygon--outer-wrapper': true
            },
            _a["as-legend-color-bins-polygon--" + this.orientation] = true,
            _a);
        return h("div", { class: outerClasses }, h("div", { class: 'as-legend-color-bins-polygon--wrapper as-legend-color-bins-polygon--color' }, this.data.map(this.renderStep)), h("div", { class: 'as-legend-color-bins-polygon--wrapper as-legend-color-bins-polygon--labels' }, this.data.map(this.renderLabels)));
    };
    class_1.prototype.renderStep = function (data) {
        return (h("div", { class: 'as-legend-color-bins-polygon--step', style: { background: data.color } }));
    };
    class_1.prototype.renderLabels = function (data) {
        return (h("div", { class: 'as-legend-color-bins-polygon--label' }, h("span", null, data.label)));
    };
    Object.defineProperty(class_1, "style", {
        get: function () { return "as-legend-color-bins-polygon{--as-legend-color-bins-polygon--border-color:rgba(0,0,0,0.1);--as-legend-color-bins-polygon--color:var(--as--color--type-01);display:block}as-legend-color-bins-polygon .as-legend-color-bins-polygon--outer-wrapper{display:-ms-flexbox;display:flex}as-legend-color-bins-polygon .as-legend-color-bins-polygon--outer-wrapper.as-legend-color-bins-polygon--vertical{-ms-flex-direction:row;flex-direction:row}as-legend-color-bins-polygon .as-legend-color-bins-polygon--outer-wrapper.as-legend-color-bins-polygon--horizontal{-ms-flex-direction:column;flex-direction:column}as-legend-color-bins-polygon .as-legend-color-bins-polygon--wrapper{display:-ms-flexbox;display:flex}as-legend-color-bins-polygon .as-legend-color-bins-polygon--color{-webkit-box-shadow:-1px 0 2px 0 var(--as-legend-color-bins-polygon--border-color);box-shadow:-1px 0 2px 0 var(--as-legend-color-bins-polygon--border-color)}as-legend-color-bins-polygon .as-legend-color-bins-polygon--horizontal .as-legend-color-bins-polygon--wrapper{min-width:300px}as-legend-color-bins-polygon .as-legend-color-bins-polygon--horizontal .as-legend-color-bins-polygon--labels{margin-top:8px}as-legend-color-bins-polygon .as-legend-color-bins-polygon--label{-ms-flex:1;flex:1;color:var(--as-legend-color-bins-polygon--color);font:var(--as--font--caption);text-transform:capitalize;white-space:nowrap}as-legend-color-bins-polygon .as-legend-color-bins-polygon--vertical .as-legend-color-bins-polygon--wrapper{-ms-flex-direction:column;flex-direction:column;min-height:300px}as-legend-color-bins-polygon .as-legend-color-bins-polygon--vertical .as-legend-color-bins-polygon--label{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center}as-legend-color-bins-polygon .as-legend-color-bins-polygon--vertical .as-legend-color-bins-polygon--labels{margin-left:8px}as-legend-color-bins-polygon .as-legend-color-bins-polygon--step{-ms-flex:1;flex:1}as-legend-color-bins-polygon .as-legend-color-bins-polygon--horizontal .as-legend-color-bins-polygon--step{height:8px;border-top:1px solid var(--as-legend-color-bins-polygon--border-color);border-bottom:1px solid var(--as-legend-color-bins-polygon--border-color)}as-legend-color-bins-polygon .as-legend-color-bins-polygon--vertical .as-legend-color-bins-polygon--step{width:8px;border-right:1px solid var(--as-legend-color-bins-polygon--border-color);border-left:1px solid var(--as-legend-color-bins-polygon--border-color)}as-legend-color-bins-polygon .as-legend-color-bins-polygon--horizontal .as-legend-color-bins-polygon--step:first-of-type{border-left:1px solid var(--as-legend-color-bins-polygon--border-color)}as-legend-color-bins-polygon .as-legend-color-bins-polygon--horizontal .as-legend-color-bins-polygon--step:last-of-type{border-right:1px solid var(--as-legend-color-bins-polygon--border-color)}as-legend-color-bins-polygon .as-legend-color-bins-polygon--vertical .as-legend-color-bins-polygon--step:first-of-type{border-top:1px solid var(--as-legend-color-bins-polygon--border-color)}as-legend-color-bins-polygon .as-legend-color-bins-polygon--vertical .as-legend-color-bins-polygon--step:last-of-type{border-bottom:1px solid var(--as-legend-color-bins-polygon--border-color)}"; },
        enumerable: true,
        configurable: true
    });
    return class_1;
}());
export { LegendColorBinsPolygon as as_legend_color_bins_polygon };
