import { r as registerInstance, h } from './core-a69618da.js';
import { b as borderStyleCounts } from './border-style-counts-8a3a8717.js';
var TEXT_MARGIN = 4;
var MIN_LINE_SIZE = 4;
var LegendSizeContinuousLine = /** @class */ (function () {
    function class_1(hostRef) {
        registerInstance(this, hostRef);
        this.data = null;
        this.orientation = 'vertical';
        this.size = 300;
        this.leadingLineStrokeWidth = 0.5;
        // Line height of the font, which is 12 with the original as-caption
        this.textLineHeight = 12;
        this.xMarginFactor = 0.1;
        this.yMarginFactor = 0.1;
        this.width = null;
        this.rSize = 0;
    }
    class_1.prototype.componentWillUpdate = function () {
        this.parseSize();
    };
    class_1.prototype.componentWillLoad = function () {
        this.parseSize();
    };
    class_1.prototype.render = function () {
        var _a;
        var _this = this;
        if (!this.data || this.data.length === 0) {
            return;
        }
        var sortedData = this.getSortedData();
        var MAX = sortedData[0].width;
        var HALF = MAX / 2;
        var X_POS = Math.max(MAX + MIN_LINE_SIZE, this.width);
        var X_OFFSET = this.orientation === 'horizontal' || this.width === null
            ? 0
            : (this.width - MAX) / 2;
        // Path is painted counterclockwise starting from bottom left point
        var realPath = [];
        var lines = [];
        sortedData.forEach(function (d, i) {
            var FACTOR = HALF * (d.width / MAX);
            var Y_RATIO = i / (sortedData.length - 1);
            var TOP_X = HALF + FACTOR;
            var BOTTOM_X = HALF - FACTOR;
            var BOTTOM_Y = _this.size - (_this.size * Y_RATIO);
            var TOP_Y = BOTTOM_Y;
            var TOP = _this.orientation === 'vertical'
                ? [TOP_X + X_OFFSET, TOP_Y]
                : [TOP_Y + X_OFFSET, TOP_X];
            var BOTTOM = _this.orientation === 'vertical'
                ? [BOTTOM_X + X_OFFSET, BOTTOM_Y]
                : [TOP_Y + X_OFFSET, BOTTOM_X];
            // Insert always at current index
            realPath.splice(i, 0, "L" + TOP.join(' '));
            // Insert just before the last element
            realPath.splice(realPath.length - i, 0, "L" + BOTTOM.join(' '));
            if (d.label) {
                var Y_OFFSET = _this.getOffset(i, sortedData.length - 1);
                var X = HALF + FACTOR;
                var Y = _this.size - (_this.size * Y_RATIO) + Y_OFFSET;
                var first = [X, Y];
                var second = [X_POS, Y];
                if (_this.orientation === 'horizontal') {
                    first.reverse();
                    second.reverse();
                }
                first[0] += X_OFFSET;
                second[0] += X_OFFSET;
                lines.push({
                    label: d.label,
                    x1: first[0],
                    x2: second[0],
                    y1: first[1],
                    y2: second[1]
                });
            }
        });
        if (this.orientation === 'horizontal') {
            realPath.splice(0, 0, "M" + this.size + " 0");
        }
        else {
            realPath.splice(0, 0, "M0 " + this.size);
        }
        var classes = (_a = {},
            _a["as-legend-size-continuous-line--" + this.orientation] = true,
            _a);
        return h("svg", { class: classes, style: this.getSVGStyle(), viewBox: this.getSVGViewBox() }, h("g", null, h("path", { style: this.getPathStyle(), d: realPath.join(' ') + ' Z' }), h("g", null, lines.map(function (_a) {
            var x1 = _a.x1, x2 = _a.x2, y1 = _a.y1, y2 = _a.y2;
            var xOff = -X_OFFSET;
            if (_this.orientation === 'horizontal') {
                xOff = 0;
            }
            return (h("line", { "stroke-width": _this.leadingLineStrokeWidth, x1: x1, y1: y1, x2: x2 + xOff, y2: y2 }));
        })), h("g", null, lines.map(function (_a) {
            var label = _a.label, x2 = _a.x2, y2 = _a.y2;
            var offset = {
                x: TEXT_MARGIN - X_OFFSET,
                y: _this.textLineHeight / 4
            };
            if (_this.orientation === 'horizontal') {
                offset.x = 0;
                offset.y = _this.textLineHeight;
            }
            return [
                h("text", { x: x2 + offset.x, y: y2 + offset.y }, label)
            ];
        }))));
    };
    class_1.prototype.parseSize = function () {
        if (!this.data || this.data.length === 0) {
            return;
        }
        var sortedData = this.getSortedData();
        var max = sortedData[0].width;
        this.rSize = Math.max(max + MIN_LINE_SIZE + (this.textLineHeight), 0);
    };
    class_1.prototype.getSortedData = function () {
        if (this.data === null) {
            return this.data;
        }
        return this.data.slice().sort(function (first, second) { return second.width - first.width; });
    };
    class_1.prototype.getPathStyle = function () {
        return {
            fill: "" + this.data[0].color
        };
    };
    class_1.prototype.getSVGStyle = function () {
        var height = (this.orientation === 'horizontal' ? this.rSize : this.size);
        return {
            height: height * (1 + this.yMarginFactor) + "px",
            width: this.size * (1 + this.xMarginFactor) + "px"
        };
    };
    class_1.prototype.getSVGViewBox = function () {
        var height = (this.orientation === 'horizontal' ? this.rSize : this.size);
        var marginX = this.size * (-this.xMarginFactor / 2);
        var marginY = height * (-this.yMarginFactor / 2);
        if (this.orientation === 'vertical') {
            marginX = 0;
        }
        return marginX + " " + marginY + " " + this.size * (1 + this.xMarginFactor) + " " + height * (1 + this.yMarginFactor);
    };
    class_1.prototype.getOffset = function (index, length) {
        var offset = 0;
        if (index === length) {
            offset += this.leadingLineStrokeWidth;
        }
        if (index === 0) {
            offset -= this.leadingLineStrokeWidth;
        }
        return offset;
    };
    Object.defineProperty(class_1, "style", {
        get: function () { return "as-legend-size-continuous-line{display:block;overflow:hidden}as-legend-size-continuous-line svg text{font:var(--as--font--caption)}as-legend-size-continuous-line svg line{stroke:var(--as-legend--color)}as-legend-size-continuous-line svg.as-legend-size-continuous-line--horizontal text{text-anchor:middle}"; },
        enumerable: true,
        configurable: true
    });
    return class_1;
}());
// This component ignores the strokeWidth property, and always paints
// a 1px border.
var FAKE_BORDER_SIZE = 1;
var LegendSizeContinuousPoint = /** @class */ (function () {
    function class_2(hostRef) {
        registerInstance(this, hostRef);
        this.orientation = 'vertical';
        this.scale = 1;
    }
    class_2.prototype.render = function () {
        var _a;
        var _this = this;
        if (!this.data) {
            return null;
        }
        var classes = (_a = {
                'as-legend-size-continuous-point--wrapper': true
            },
            _a["as-legend-size-continuous-point--" + this.orientation] = true,
            _a);
        var sortedData = this.data.slice().sort(function (first, second) { return second.width - first.width; });
        this.maxSize = sortedData[0].width * this.scale;
        var size = {
            height: this.maxSize + "px",
            width: this.maxSize + "px"
        };
        return h("div", { class: classes }, h("span", { class: 'as-legend-size-continuous-point--label' }, sortedData[sortedData.length - 1].label), h("div", { style: size, class: 'as-legend-size-continuous-point--steps' }, sortedData.map(function (data) { return _this.renderStep(data); })), h("span", { class: 'as-legend-size-continuous-point--label' }, sortedData[0].label));
    };
    class_2.prototype.renderStep = function (data) {
        var strokeStyle = FAKE_BORDER_SIZE + "px " + (data.strokeStyle || 'solid') + " " + data.strokeColor;
        var sizeOffset = borderStyleCounts(data.strokeStyle)
            ? FAKE_BORDER_SIZE * 2
            : 0;
        var size = Math.round((data.width + sizeOffset) * this.scale) + "px";
        var style = {
            backgroundColor: data.color,
            border: strokeStyle,
            height: size,
            width: size,
        };
        return h("div", { class: 'as-legend-size-continuous-point--circle', style: style });
    };
    Object.defineProperty(class_2, "style", {
        get: function () { return "as-legend-size-continuous-point{--as-legend-size-continuous-point--color:var(--as--color--type-01);--as-legend-size-continuous-point--shadow:rgba(0,0,0,0.1);display:block}as-legend-size-continuous-point .as-legend-size-continuous-point--steps{position:relative;margin:8px}as-legend-size-continuous-point .as-legend-size-continuous-point--steps,as-legend-size-continuous-point .as-legend-size-continuous-point--wrapper{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}as-legend-size-continuous-point .as-legend-size-continuous-point--circle{position:absolute;border:2px solid var(--as-legend-size-continuous-point--shadow);border-radius:50%;-webkit-box-shadow:0 0 2px 0 var(--as-legend-size-continuous-point--shadow);box-shadow:0 0 2px 0 var(--as-legend-size-continuous-point--shadow)}as-legend-size-continuous-point .as-legend-size-continuous-point--label{color:var(--as-legend-size-continuous-point--color);font:var(--as--font--caption);text-transform:capitalize;white-space:nowrap}as-legend-size-continuous-point .as-legend-size-continuous-point--vertical .as-legend-size-continuous-point--steps,as-legend-size-continuous-point .as-legend-size-continuous-point--vertical.as-legend-size-continuous-point--wrapper{-ms-flex-direction:column-reverse;flex-direction:column-reverse}"; },
        enumerable: true,
        configurable: true
    });
    return class_2;
}());
export { LegendSizeContinuousLine as as_legend_size_continuous_line, LegendSizeContinuousPoint as as_legend_size_continuous_point };
