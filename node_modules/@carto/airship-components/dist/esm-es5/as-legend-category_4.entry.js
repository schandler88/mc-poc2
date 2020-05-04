import { r as registerInstance, h } from './core-a69618da.js';
import { b as borderStyleCounts } from './border-style-counts-8a3a8717.js';
var MIN_WIDTH = 16;
var LegendColorCategory = /** @class */ (function () {
    function class_1(hostRef) {
        registerInstance(this, hostRef);
    }
    class_1.prototype.render = function () {
        var _this = this;
        if (!this.data || this.data.length === 0) {
            return null;
        }
        var wrapper = {
            'as-legend-category--wrapper': true,
            'as-legend-category--wrapper-horizontal': this.orientation === 'horizontal'
        };
        return h("div", { style: this.getStyle(), class: wrapper }, this.data
            .map(function (e) { return _this.renderLegend(e); })
            .filter(function (e) { return e !== null; })
            .map(function (e) { return h("div", { class: 'as-legend-category--entry' }, e); }));
    };
    class_1.prototype.renderLegend = function (legend) {
        switch (legend.type) {
            case 'point':
                return h("as-legend-category-point-entry", { label: legend.label, width: this.width || legend.width, color: legend.color, strokeColor: legend.strokeColor, marker: legend.marker, strokeStyle: legend.strokeStyle });
            case 'line':
                return h("as-legend-category-line-entry", { label: legend.label, width: legend.width, color: legend.color, strokeStyle: legend.strokeStyle });
            case 'polygon':
                return h("as-legend-category-polygon-entry", { label: legend.label, color: legend.color, strokeColor: legend.strokeColor, strokeStyle: legend.strokeStyle });
            default:
                return null;
        }
    };
    class_1.prototype.getStyle = function () {
        var maxLegendWidth = this.data.slice().sort(function (first, second) { return second.width - first.width; })[0].width;
        return {
            '--as--basic--legend--figure-width': (this.width || Math.max(maxLegendWidth, MIN_WIDTH)) + "px"
        };
    };
    Object.defineProperty(class_1, "style", {
        get: function () { return "as-legend-category{--as--basic--legend--font:var(--as--font--caption);--as--basic--legend--text-transform:capitalize;display:block}as-legend-category .as-legend-category--wrapper{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:wrap;flex-wrap:wrap}as-legend-category .as-legend-category--label{font:var(--as--basic--legend--font);text-transform:var(--as--basic--legend--text-transform)}as-legend-category .as-legend-category--figure--wrapper{width:var(--as--basic--legend--figure-width);margin-right:8px}as-legend-category .as-legend-category--wrapper-horizontal>.as-legend-category--entry{margin-right:12px}as-legend-category .as-legend-category--wrapper:not(.as-legend-category--wrapper-horizontal)>.as-legend-category--entry:not(:first-child){margin-top:12px}as-legend-category .as-legend-category--wrapper-horizontal{-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center}"; },
        enumerable: true,
        configurable: true
    });
    return class_1;
}());
var MAX_WIDTH = 16;
var LegendCategoryLineEntry = /** @class */ (function () {
    function class_2(hostRef) {
        registerInstance(this, hostRef);
        this.strokeStyle = 'solid';
        this.width = 1.5;
    }
    class_2.prototype.componentWillLoad = function () {
        this._widthChanged(this.width);
    };
    class_2.prototype.render = function () {
        return (h("div", { class: 'as-legend-category-line-entry--wrapper' }, h("div", { class: 'as-legend-category--figure--wrapper' }, h("div", { class: 'as-legend-category-line-entry--line', style: this.getStyle() })), h("span", { class: 'as-legend-category--label' }, this.label)));
    };
    class_2.prototype._widthChanged = function (newValue) {
        this._width = Math.min(MAX_WIDTH, newValue);
    };
    class_2.prototype.getStyle = function () {
        return {
            borderTopColor: this.color,
            borderTopStyle: this.strokeStyle,
            borderTopWidth: "" + this._width
        };
    };
    Object.defineProperty(class_2, "watchers", {
        get: function () {
            return {
                "width": ["_widthChanged"]
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_2, "style", {
        get: function () { return "as-legend-category-line-entry .as-legend-category-line-entry--wrapper{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}as-legend-category-line-entry .as-legend-category-line-entry--line{width:16px;height:0;margin:auto}"; },
        enumerable: true,
        configurable: true
    });
    return class_2;
}());
// This component ignores the strokeWidth property, and always paints
// a 1px border.
var FAKE_BORDER_SIZE = 1;
var DEFAULT_WIDTH = 16;
// Required for background masks to work properly
var SYMBOL_OFFSET = 2;
var LegendCategoryPointEntry = /** @class */ (function () {
    function class_3(hostRef) {
        registerInstance(this, hostRef);
        this.width = DEFAULT_WIDTH;
    }
    class_3.prototype.render = function () {
        var classes = {
            'as-legend-category-point-entry--point': !this.marker,
            'as-legend-category-point-entry--symbol': true
        };
        return (h("div", { class: 'as-legend-category-point-entry--wrapper' }, h("div", { class: 'as-legend-category--figure--wrapper' }, h("div", { class: classes, style: this.getStyle() })), h("span", { class: 'as-legend-category--label' }, this.label)));
    };
    class_3.prototype.getStyle = function () {
        return Object.assign({ backgroundColor: this.color, border: FAKE_BORDER_SIZE + "px " + (this.strokeStyle || 'solid') + " " + this.strokeColor }, this.getWidth(), this.getMask());
    };
    class_3.prototype.getWidth = function () {
        if (!this.width) {
            return {};
        }
        var sizeOffset = borderStyleCounts(this.strokeStyle)
            ? FAKE_BORDER_SIZE * 2
            : 0;
        if (this.marker) {
            sizeOffset += SYMBOL_OFFSET;
        }
        return {
            height: this.width + sizeOffset + "px",
            width: this.width + sizeOffset + "px"
        };
    };
    class_3.prototype.getMask = function () {
        if (!this.marker) {
            return {};
        }
        return {
            '-webkit-mask-image': "url(" + this.marker + ")",
            '-webkit-mask-position': 'center',
            '-webkit-mask-repeat': 'no-repeat',
            '-webkit-mask-size': this.width + "px",
            'maskImage': "url(" + this.marker + ")",
            'maskPosition': 'center',
            'maskRepeat': 'no-repeat',
            'maskSize': this.width + "px"
        };
    };
    Object.defineProperty(class_3, "style", {
        get: function () { return "as-legend-category-point-entry .as-legend-category-point-entry--wrapper{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}as-legend-category-point-entry .as-legend-category-point-entry--symbol{width:100%;height:auto;margin:auto}as-legend-category-point-entry .as-legend-category-point-entry--point{border-radius:50%}"; },
        enumerable: true,
        configurable: true
    });
    return class_3;
}());
var LegendColorCategoryPolygonEntry = /** @class */ (function () {
    function class_4(hostRef) {
        registerInstance(this, hostRef);
    }
    class_4.prototype.render = function () {
        return (h("div", { class: 'as-legend-category-polygon-entry--wrapper' }, h("div", { class: 'as-legend-category--figure--wrapper' }, h("div", { class: 'as-legend-category-polygon-entry--box', style: this.getStyle() })), h("span", { class: 'as-legend-category--label' }, this.label)));
    };
    class_4.prototype.getStyle = function () {
        return {
            backgroundColor: this.color,
            border: "1px " + (this.strokeStyle || 'solid') + " " + this.strokeColor
        };
    };
    Object.defineProperty(class_4, "style", {
        get: function () { return "as-legend-category-polygon-entry .as-legend-category-polygon-entry--wrapper{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}as-legend-category-polygon-entry .as-legend-category-polygon-entry--box{width:16px;height:12px;margin:auto}"; },
        enumerable: true,
        configurable: true
    });
    return class_4;
}());
export { LegendColorCategory as as_legend_category, LegendCategoryLineEntry as as_legend_category_line_entry, LegendCategoryPointEntry as as_legend_category_point_entry, LegendColorCategoryPolygonEntry as as_legend_category_polygon_entry };
