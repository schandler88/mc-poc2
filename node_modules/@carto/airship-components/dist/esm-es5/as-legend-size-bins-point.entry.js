import { r as registerInstance, h } from './core-a69618da.js';
import { b as borderStyleCounts } from './border-style-counts-8a3a8717.js';
// This component ignores the strokeWidth property, and always paints
// a 1px border.
var FAKE_BORDER_SIZE = 1;
var LegendSizeBinsPoint = /** @class */ (function () {
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
        var classes = (_a = {
                'as-legend-size-bins-point--steps': true
            },
            _a["as-legend-size-bins-point--" + this.orientation] = true,
            _a);
        this.maxSize = this.width || this.data.slice().sort(function (first, second) { return second.width - first.width; })[0].width;
        return h("div", { class: classes }, this.data.map(function (data) { return _this.renderStep(data); }));
    };
    class_1.prototype.renderStep = function (data) {
        var strokeStyle = FAKE_BORDER_SIZE + "px " + (data.strokeStyle || 'solid') + " " + data.strokeColor;
        // Elements are box-sizing: border-box, so we have to compensate
        var sizeOffset = borderStyleCounts(data.strokeStyle)
            ? FAKE_BORDER_SIZE * 2
            : 0;
        var SIZE = Math.round(data.width) + sizeOffset;
        var SIZE_PX = SIZE + "px";
        var MAX_SIZE = SIZE > this.maxSize ? SIZE : this.maxSize + sizeOffset;
        var MAX_SIZE_PX = MAX_SIZE + "px";
        var mask = this.getMask(data);
        var wrapperStyle = {};
        if (this.orientation === 'horizontal') {
            wrapperStyle.height = MAX_SIZE_PX;
        }
        else if (this.orientation === 'vertical') {
            wrapperStyle.width = MAX_SIZE_PX;
        }
        var style = Object.assign({ backgroundColor: data.color, border: strokeStyle, height: SIZE_PX, width: SIZE_PX }, mask);
        return (h("div", { class: 'as-legend-size-bins-point--step' }, h("div", { style: wrapperStyle, class: 'as-legend-size-bins-point--circle-wrapper' }, h("div", { class: 'as-legend-size-bins-point--circle', style: style })), h("span", { class: 'as-legend-size-bins-point--label' }, data.label)));
    };
    class_1.prototype.getMask = function (data) {
        if (!data.marker) {
            return {};
        }
        return {
            '-webkit-mask-image': "url(" + data.marker + ")",
            '-webkit-mask-position': 'center',
            '-webkit-mask-repeat': 'no-repeat',
            '-webkit-mask-size': data.width + "px",
            'maskImage': "url(" + data.marker + ")",
            'maskPosition': 'center',
            'maskRepeat': 'no-repeat',
            'maskSize': data.width + "px"
        };
    };
    Object.defineProperty(class_1, "style", {
        get: function () { return "as-legend-size-bins-point{--as-legend-size-bins-point--color:var(--as--color--type-01);--as-legend-size-bins-point--shadow:rgba(0,0,0,0.1);display:block}as-legend-size-bins-point .as-legend-size-bins-point--steps{display:-ms-flexbox;display:flex}as-legend-size-bins-point .as-legend-size-bins-point--step{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}as-legend-size-bins-point .as-legend-size-bins-point--circle{border-radius:50%;-webkit-box-shadow:-1px 0 2px 0 var(--as-legend-size-bins-point--shadow);box-shadow:-1px 0 2px 0 var(--as-legend-size-bins-point--shadow)}as-legend-size-bins-point .as-legend-size-bins-point--circle-wrapper{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}as-legend-size-bins-point .as-legend-size-bins-point--label{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;color:var(--as-legend-size-bins-point--color);font:var(--as--font--caption);text-transform:capitalize;white-space:nowrap}as-legend-size-bins-point .as-legend-size-bins-point--horizontal{-ms-flex-direction:row;flex-direction:row;-ms-flex-align:start;align-items:flex-start;-ms-flex-pack:distribute;justify-content:space-around}as-legend-size-bins-point .as-legend-size-bins-point--horizontal .as-legend-size-bins-point--step{-ms-flex-direction:column;flex-direction:column;margin:0 4px}as-legend-size-bins-point .as-legend-size-bins-point--horizontal .as-legend-size-bins-point--step:first-of-type{margin-left:0}as-legend-size-bins-point .as-legend-size-bins-point--horizontal .as-legend-size-bins-point--step:last-of-type{margin-right:0}as-legend-size-bins-point .as-legend-size-bins-point--horizontal .as-legend-size-bins-point--label{margin-top:8px}as-legend-size-bins-point .as-legend-size-bins-point--horizontal .as-legend-size-bins-point--circle-wrapper{-ms-flex-align:end;align-items:flex-end}as-legend-size-bins-point .as-legend-size-bins-point--vertical{-ms-flex-direction:column;flex-direction:column}as-legend-size-bins-point .as-legend-size-bins-point--vertical .as-legend-size-bins-point--label{margin-left:8px}as-legend-size-bins-point .as-legend-size-bins-point--vertical .as-legend-size-bins-point--step:not(:first-of-type){margin-top:8px}"; },
        enumerable: true,
        configurable: true
    });
    return class_1;
}());
export { LegendSizeBinsPoint as as_legend_size_bins_point };
