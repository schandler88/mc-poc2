'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-894cddb9.js');

const CategoryWidgetPlaceholder = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
    }
    render() {
        return (core.h("as-placeholder", null, core.h("div", { slot: 'header' }, core.h("slot", null)), core.h("as-placeholder-chart", null)));
    }
    static get style() { return "as-histogram-widget-placeholder{background-color:var(--as--color--ui-01,$color-ui-01)}"; }
};

const PlaceholderChart = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
        this.barWidth = 10;
    }
    onWindowResize() {
        window.clearTimeout(this.resizeTimerId);
        this.resizeTimerId = setTimeout(() => { this.setElementWidth(); }, 250);
    }
    componentDidLoad() {
        this.setElementWidth();
    }
    render() {
        const numberOfBars = calculateBarsQuantity(this.elementWidth, this.barWidth);
        const placeholderBars = this.renderBars(numberOfBars);
        return [
            core.h("section", { class: 'placeholder__vaxis' }, core.h("div", { class: 'vaxis-item vaxis-item--y' }), core.h("div", { class: 'vaxis-item vaxis-item--y' }), core.h("div", { class: 'vaxis-item vaxis-item--y' }), core.h("div", { class: 'vaxis-item vaxis-item--x' })),
            core.h("section", { class: 'placeholder-chart' }, placeholderBars)
        ];
    }
    renderBars(numberOfBars) {
        const bars = [];
        for (let i = 0; i < numberOfBars; i++) {
            const barPercentage = Math.trunc(Math.random() * 85) + 15;
            bars.push(core.h("as-placeholder-bar", { class: 'placeholder-chart__bar', height: `${barPercentage}%`, width: `${this.barWidth}px` }));
        }
        return bars;
    }
    setElementWidth() {
        const boundingRect = this.element.getBoundingClientRect();
        this.elementWidth = boundingRect.width;
    }
    get element() { return core.getElement(this); }
    static get style() { return "as-placeholder-chart{display:block;position:relative;height:150px;min-height:100%;margin:16px 0 18px}.placeholder-chart{display:-ms-flexbox;display:flex;-ms-flex-align:end;align-items:flex-end;-ms-flex-pack:left;justify-content:left;height:100%;padding:0 10px 6px 30px}.placeholder-chart__bar{position:relative;height:100%}.placeholder-chart__bar:not(:last-child){padding-right:1px}.placeholder-chart__bar:first-child:after,.placeholder-chart__bar:nth-child(6n):after{content:\"\";position:absolute;bottom:-22px;width:6px;height:8px;background-color:var(--as--color--ui-02,#f5f5f5)}.placeholder__vaxis{position:absolute;bottom:2px;left:8px}.vaxis-item{height:8px;margin-top:30px;background-color:var(--as--color--ui-02,#f5f5f5)}.vaxis-item.vaxis-item--y{width:10px}.vaxis-item.vaxis-item--x{width:6px;margin-left:4px}"; }
};
function calculateBarsQuantity(elementWidth, barWidth) {
    if (!elementWidth) {
        return 1;
    }
    return Math.floor(elementWidth / barWidth);
}

const WidgetSelection = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
        /**
         * Text for the clear text
         *
         * @type {string}
         * @memberof WidgetSelection
         */
        this.clearText = 'Clear selection';
        this.clear = core.createEvent(this, "clear", 7);
    }
    render() {
        return core.h("div", { class: 'as-color--type-01 as-widget-selection__wrapper' }, core.h("span", { class: 'as-widget-selection__selection as-body' }, this.selection), this.showClear ? this.renderClearBtn() : '');
    }
    renderClearBtn() {
        return (core.h("span", { class: 'as-body as-color--primary as-widget-selection__clear', onClick: () => { this.clear.emit(); } }, this.clearText));
    }
    static get style() { return "as-widget-selection .as-widget-selection__wrapper{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}as-widget-selection .as-widget-selection__clear{margin-left:8px;cursor:pointer}"; }
};

exports.as_histogram_widget_placeholder = CategoryWidgetPlaceholder;
exports.as_placeholder_chart = PlaceholderChart;
exports.as_widget_selection = WidgetSelection;
