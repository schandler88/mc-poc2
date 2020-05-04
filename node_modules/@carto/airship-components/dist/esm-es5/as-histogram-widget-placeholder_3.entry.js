import { r as registerInstance, h, g as getElement, c as createEvent } from './core-a69618da.js';
var CategoryWidgetPlaceholder = /** @class */ (function () {
    function class_1(hostRef) {
        registerInstance(this, hostRef);
    }
    class_1.prototype.render = function () {
        return (h("as-placeholder", null, h("div", { slot: 'header' }, h("slot", null)), h("as-placeholder-chart", null)));
    };
    Object.defineProperty(class_1, "style", {
        get: function () { return "as-histogram-widget-placeholder{background-color:var(--as--color--ui-01,$color-ui-01)}"; },
        enumerable: true,
        configurable: true
    });
    return class_1;
}());
var PlaceholderChart = /** @class */ (function () {
    function class_2(hostRef) {
        registerInstance(this, hostRef);
        this.barWidth = 10;
    }
    class_2.prototype.onWindowResize = function () {
        var _this = this;
        window.clearTimeout(this.resizeTimerId);
        this.resizeTimerId = setTimeout(function () { _this.setElementWidth(); }, 250);
    };
    class_2.prototype.componentDidLoad = function () {
        this.setElementWidth();
    };
    class_2.prototype.render = function () {
        var numberOfBars = calculateBarsQuantity(this.elementWidth, this.barWidth);
        var placeholderBars = this.renderBars(numberOfBars);
        return [
            h("section", { class: 'placeholder__vaxis' }, h("div", { class: 'vaxis-item vaxis-item--y' }), h("div", { class: 'vaxis-item vaxis-item--y' }), h("div", { class: 'vaxis-item vaxis-item--y' }), h("div", { class: 'vaxis-item vaxis-item--x' })),
            h("section", { class: 'placeholder-chart' }, placeholderBars)
        ];
    };
    class_2.prototype.renderBars = function (numberOfBars) {
        var bars = [];
        for (var i = 0; i < numberOfBars; i++) {
            var barPercentage = Math.trunc(Math.random() * 85) + 15;
            bars.push(h("as-placeholder-bar", { class: 'placeholder-chart__bar', height: barPercentage + "%", width: this.barWidth + "px" }));
        }
        return bars;
    };
    class_2.prototype.setElementWidth = function () {
        var boundingRect = this.element.getBoundingClientRect();
        this.elementWidth = boundingRect.width;
    };
    Object.defineProperty(class_2.prototype, "element", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_2, "style", {
        get: function () { return "as-placeholder-chart{display:block;position:relative;height:150px;min-height:100%;margin:16px 0 18px}.placeholder-chart{display:-ms-flexbox;display:flex;-ms-flex-align:end;align-items:flex-end;-ms-flex-pack:left;justify-content:left;height:100%;padding:0 10px 6px 30px}.placeholder-chart__bar{position:relative;height:100%}.placeholder-chart__bar:not(:last-child){padding-right:1px}.placeholder-chart__bar:first-child:after,.placeholder-chart__bar:nth-child(6n):after{content:\"\";position:absolute;bottom:-22px;width:6px;height:8px;background-color:var(--as--color--ui-02,#f5f5f5)}.placeholder__vaxis{position:absolute;bottom:2px;left:8px}.vaxis-item{height:8px;margin-top:30px;background-color:var(--as--color--ui-02,#f5f5f5)}.vaxis-item.vaxis-item--y{width:10px}.vaxis-item.vaxis-item--x{width:6px;margin-left:4px}"; },
        enumerable: true,
        configurable: true
    });
    return class_2;
}());
function calculateBarsQuantity(elementWidth, barWidth) {
    if (!elementWidth) {
        return 1;
    }
    return Math.floor(elementWidth / barWidth);
}
var WidgetSelection = /** @class */ (function () {
    function class_3(hostRef) {
        registerInstance(this, hostRef);
        /**
         * Text for the clear text
         *
         * @type {string}
         * @memberof WidgetSelection
         */
        this.clearText = 'Clear selection';
        this.clear = createEvent(this, "clear", 7);
    }
    class_3.prototype.render = function () {
        return h("div", { class: 'as-color--type-01 as-widget-selection__wrapper' }, h("span", { class: 'as-widget-selection__selection as-body' }, this.selection), this.showClear ? this.renderClearBtn() : '');
    };
    class_3.prototype.renderClearBtn = function () {
        var _this = this;
        return (h("span", { class: 'as-body as-color--primary as-widget-selection__clear', onClick: function () { _this.clear.emit(); } }, this.clearText));
    };
    Object.defineProperty(class_3, "style", {
        get: function () { return "as-widget-selection .as-widget-selection__wrapper{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}as-widget-selection .as-widget-selection__clear{margin-left:8px;cursor:pointer}"; },
        enumerable: true,
        configurable: true
    });
    return class_3;
}());
export { CategoryWidgetPlaceholder as as_histogram_widget_placeholder, PlaceholderChart as as_placeholder_chart, WidgetSelection as as_widget_selection };
