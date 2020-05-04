import { r as registerInstance, c as createEvent, h, g as getElement } from './core-a69618da.js';
function getDecimalPlaces(decimalNumber) {
    // Copied this method from: https://bit.ly/2DfxbfQ
    function hasFraction(numberToCheck) {
        return Math.abs(Math.round(numberToCheck) - numberToCheck) > 1e-10;
    }
    var count = 0;
    // multiply by increasing powers of 10 until the fractional part is ~ 0
    while (hasFraction(decimalNumber * (Math.pow(10, count))) && isFinite(Math.pow(10, count))) {
        count++;
    }
    return count;
}
var RangeSlider = /** @class */ (function () {
    function class_1(hostRef) {
        registerInstance(this, hostRef);
        /**
         * Bottom limit of the range.
         * You cannot drag your slider below this value. By default the value is 0.
         *
         * @type {number}
         * @memberof RangeSlider
         */
        this.minValue = 0;
        /**
         * Top limit of the range.
         * You cannot drag your slider beyond this value. By default the value is 10.
         *
         * @type {number}
         * @memberof RangeSlider
         */
        this.maxValue = 10;
        /**
         * Increment/decrement step of the slider.
         * You can change the step setting a different number to this property. Defaults to 1.
         *
         * @type {number}
         * @memberof RangeSlider
         */
        this.step = 1;
        /**
         * Disables component if truthy
         *
         * @type {boolean}
         * @memberof RangeSlider
         */
        this.disabled = false;
        /**
         * @deprecated Use isDraggable instead
         * @type {boolean}
         * @memberof RangeSlider
         */
        this.draggable = false;
        /**
         * If this property is set to true, and it has multiple value, you can drag the entire track.
         *
         * @type {number}
         * @memberof RangeSlider
         */
        this.isDraggable = false;
        /**
         * Disables the range slider thumb
         *
         * @type {boolean}
         * @memberof RangeSlider
         */
        this.showThumb = true;
        /**
         * Disables the range slider thumb caption
         *
         * @type {boolean}
         * @memberof RangeSlider
         */
        this.showThumbCaption = true;
        this.thumbs = [];
        this.change = createEvent(this, "change", 7);
        this.changeStart = createEvent(this, "changeStart", 7);
        this.changeEnd = createEvent(this, "changeEnd", 7);
    }
    class_1.prototype.validateValue = function (newValue) {
        if (!this._isBetweenValidValues(newValue)) {
            throw new Error("RangeSlider: Value " + newValue + " has to be between " +
                ("minValue (" + this.minValue + ") and maxValue (" + this.maxValue + ")"));
        }
        this._updateThumbs();
    };
    class_1.prototype.validateRange = function (newRange) {
        var _this = this;
        if (newRange.length !== 2) {
            throw new Error("RangeSlider: Range " + newRange + " need two values at most");
        }
        newRange.map(function (value) { return _this.validateValue(value); });
        this._updateThumbs();
    };
    class_1.prototype.componentWillLoad = function () {
        this._validateValues();
        this._updateThumbs();
    };
    class_1.prototype.componentDidRender = function () {
        this._checkLabelOverflow();
    };
    class_1.prototype.componentDidLoad = function () {
        this.checkThumbCollision();
    };
    class_1.prototype.render = function () {
        var _this = this;
        if (this.thumbs.length < 1) {
            return;
        }
        var cssClasses = {
            'as-range-slider': true,
            'as-range-slider--disabled': this.disabled
        };
        return (h("div", { class: cssClasses }, h("div", { class: 'as-range-slider__rail' }, this.thumbs.map(function (thumb) { return _this._renderThumb(thumb); }), this._renderRangeBar(), this._renderCollapsedLabel())));
    };
    class_1.prototype._getLabelOffsetPercentage = function () {
        var difference = this.thumbs[1].percentage - this.thumbs[0].percentage;
        return this.thumbs[0].percentage + (difference / 2);
    };
    class_1.prototype._updateThumbs = function () {
        this.thumbs = this._createThumbs();
    };
    class_1.prototype._renderThumb = function (thumb) {
        var _this = this;
        if (this.showThumb) {
            return h("as-range-slider-thumb", { value: thumb.value, valueMin: thumb.valueMin, valueMax: thumb.valueMax, percentage: thumb.percentage, disabled: this.disabled, formatValue: this.formatValue, showCaption: this._shouldShowCaption(), onThumbMove: function (event) { return _this._onThumbMove(thumb, event.detail); }, onThumbIncrease: function () { return _this._onKeyboardThumbMove(thumb, +1); }, onThumbDecrease: function () { return _this._onKeyboardThumbMove(thumb, -1); }, onThumbChangeStart: function () { return _this._emitChangeIn(_this.changeStart); }, onThumbChangeEnd: function () { return _this._emitChangeIn(_this.changeEnd); }, onThumbRender: function () { return _this.checkThumbCollision(); } });
        }
    };
    class_1.prototype._renderRangeBar = function () {
        var _this = this;
        var _a = this._getCurrentThumbPercentages(), firstThumbPercentage = _a[0], lastThumbPercentage = _a[1];
        var isDraggable = (this.isDraggable || this.draggable) && this.range !== undefined;
        return h("as-range-slider-bar", { rangeStartPercentage: firstThumbPercentage, rangeEndPercentage: lastThumbPercentage, isDraggable: isDraggable, disabled: this.disabled, stepPercentage: this._getStepPercentage(), onBarChangeStart: function () { return _this._emitChangeIn(_this.changeStart); }, onBarChangeEnd: function () { return _this._emitChangeIn(_this.changeEnd); }, onBarMove: function (event) { return _this._onBarMove(event); } });
    };
    class_1.prototype._renderCollapsedLabel = function () {
        if (this.thumbs.length !== 2) {
            return;
        }
        var defaultFormatValue = function (value) { return value; };
        var formatValue = this.formatValue || defaultFormatValue;
        var labelOffsetPercentage = this._getLabelOffsetPercentage();
        var thumbsBalancedLeft = this.thumbs[0].percentage < 50;
        var positionStyles = {
            left: labelOffsetPercentage + "%"
        };
        var classes = {
            'as-caption': true,
            'as-font-medium': true,
            'as-range-slider__rail-label': true,
            'as-range-slider__rail-label--active': this.areLabelsColliding,
            'as-range-slider__rail-label__overflow--left': this.isLeftLabelOverflowing && thumbsBalancedLeft,
            'as-range-slider__rail-label__overflow--right': this.isRightLabelOverflowing && !thumbsBalancedLeft
        };
        return (h("div", { class: classes, style: positionStyles }, formatValue(this.thumbs[0].value), h("span", { class: 'as-range-slider__label-separator' }, "\u2014"), formatValue(this.thumbs[1].value)));
    };
    class_1.prototype._getCurrentThumbPercentages = function () {
        var firstThumbPercentage = this._sliderHasRange() ? this.thumbs[0].percentage : 0;
        var lastThumbPercentage = this.thumbs[this.thumbs.length - 1].percentage;
        return [firstThumbPercentage, lastThumbPercentage];
    };
    class_1.prototype._shouldShowCaption = function () {
        return !this.areLabelsColliding && this.showThumbCaption;
    };
    class_1.prototype._validateValues = function () {
        if (this.value) {
            this.validateValue(this.value);
            return;
        }
        if (this.range) {
            this.validateRange(this.range);
            return;
        }
    };
    class_1.prototype._createThumbs = function () {
        var _this = this;
        var hasRangeValues = this.range && this.range.length;
        if (!hasRangeValues) {
            return [this._getThumbData(this.value)];
        }
        var thumbs = this.range.map(function (value) { return _this._getThumbData(value); });
        this._clampThumbValues(thumbs);
        return thumbs;
    };
    class_1.prototype._getThumbData = function (value) {
        return {
            percentage: this._isBetweenValidValues(value) ?
                this._getPercentage(value)
                : this._getPercentage(this.minValue),
            value: this._isBetweenValidValues(value) ? value : this.minValue,
            valueMax: this.maxValue,
            valueMin: this.minValue
        };
    };
    class_1.prototype._isBetweenValidValues = function (value) {
        return value >= this.minValue && value <= this.maxValue;
    };
    class_1.prototype._sliderHasRange = function () {
        return this.range && this.range.length === 2;
    };
    class_1.prototype._onKeyboardThumbMove = function (thumb, direction) {
        var percentage = this._getPercentage(thumb.value + (direction * this.step));
        if (percentage < 0 || percentage > 100) {
            return;
        }
        this._onThumbMove(thumb, percentage);
    };
    class_1.prototype._onThumbMove = function (thumb, percentage) {
        var _a = this.thumbs, leftThumb = _a[0], rightThumb = _a[1];
        var isLeftThumb = leftThumb === thumb;
        var isRightThumb = rightThumb === thumb;
        var value = this._getValueFromPercentage(percentage);
        var stepValue = this._getStepValue(value);
        var stepPercentage = this._getPercentage(stepValue);
        var valueMin = this.minValue;
        var valueMax = this.maxValue;
        if (this._sliderHasRange() && isLeftThumb) {
            valueMax = (rightThumb.value - this.step);
            if (valueMax < stepValue) {
                return;
            }
        }
        if (this._sliderHasRange() && isRightThumb) {
            valueMin = (leftThumb.value + this.step);
            if (valueMin > stepValue) {
                return;
            }
        }
        thumb.value = stepValue;
        thumb.valueMin = valueMin;
        thumb.valueMax = valueMax;
        thumb.percentage = stepPercentage;
        this.thumbs = this.thumbs.slice();
        this._emitChangeIn(this.change);
    };
    class_1.prototype._onBarMove = function (percentage) {
        var _this = this;
        var percentageRange = percentage.detail;
        var rangeValues = percentageRange.map(function (p) { return _this._getValueFromPercentage(p); });
        var stepValues = rangeValues.map(function (value) { return _this._getStepValue(value); });
        var thumbs = stepValues.map(function (stepValue) { return ({
            percentage: _this._getPercentage(stepValue),
            value: stepValue
        }); });
        this._clampThumbValues(thumbs);
        this.thumbs = thumbs.slice();
        this._emitChangeIn(this.change);
    };
    class_1.prototype._emitChangeIn = function (eventEmitterInstance) {
        var values = this.thumbs.map(function (thumb) { return thumb.value; });
        return eventEmitterInstance.emit(values);
    };
    class_1.prototype._getPercentage = function (value) {
        return ((value - this.minValue) / (this.maxValue - this.minValue)) * 100;
    };
    class_1.prototype._getValueFromPercentage = function (percentage) {
        return ((percentage * (this.maxValue - this.minValue)) / 100) + this.minValue;
    };
    class_1.prototype._getStepPercentage = function () {
        var range = (this.maxValue - this.minValue);
        return this.step * 100 / range;
    };
    class_1.prototype._clampThumbValues = function (thumbs) {
        var leftThumb = thumbs[0], rightThumb = thumbs[1];
        leftThumb.valueMin = this.minValue;
        leftThumb.valueMax = Math.min(rightThumb.value - this.step, this.maxValue);
        rightThumb.valueMin = Math.max(this.minValue, leftThumb.value + this.step);
        rightThumb.valueMax = this.maxValue;
    };
    class_1.prototype._getStepValue = function (value) {
        var stepValue = Math.max(this.minValue, Math.round(value / this.step) * this.step);
        return this.roundToStep(stepValue, this.step);
    };
    class_1.prototype.roundToStep = function (numberToRound, step) {
        return Number.parseFloat(numberToRound.toFixed(getDecimalPlaces(step)));
    };
    class_1.prototype._checkLabelOverflow = function () {
        var thumbLabels = this.element.querySelectorAll('as-range-slider-thumb .as-range-slider__value');
        if (thumbLabels) {
            var leftLabelOverflows = this.checkOverflowInParentContainer(thumbLabels[0]).overflow;
            var rightLabelOverflows = ((thumbLabels.length > 1)
                ? this.checkOverflowInParentContainer(thumbLabels[1])
                : { overflow: false }).overflow;
            this.isLeftLabelOverflowing = leftLabelOverflows;
            this.isRightLabelOverflowing = rightLabelOverflows;
        }
    };
    class_1.prototype.checkThumbCollision = function () {
        var thumbLabels = this.element.querySelectorAll('as-range-slider-thumb .as-range-slider__value');
        if (!thumbLabels || thumbLabels.length !== 2) {
            return;
        }
        var leftThumbLabel = thumbLabels[0];
        var rightThumbLabel = thumbLabels[1];
        var leftThumbLabelCR = leftThumbLabel.getBoundingClientRect();
        var rightThumbLabelCR = rightThumbLabel.getBoundingClientRect();
        this.areLabelsColliding = isColliding(leftThumbLabelCR, rightThumbLabelCR, 8);
    };
    class_1.prototype.checkOverflowInParentContainer = function (labelElement) {
        if (labelElement) {
            var containerElement = this.element.parentElement;
            var containerBCR = containerElement.getBoundingClientRect();
            var labelBCR = labelElement.getBoundingClientRect();
            var isOverflowingLeft = containerBCR.left > labelBCR.left;
            var isOverflowingRight = containerBCR.right < labelBCR.left + labelBCR.width;
            return {
                left: isOverflowingLeft,
                overflow: isOverflowingLeft || isOverflowingRight,
                right: isOverflowingRight
            };
        }
        return {
            left: false,
            overflow: false,
            right: false
        };
    };
    Object.defineProperty(class_1.prototype, "element", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_1, "watchers", {
        get: function () {
            return {
                "value": ["validateValue"],
                "range": ["validateRange"]
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_1, "style", {
        get: function () { return "as-range-slider{--as--range-slider--rail-color:var(--as--color--ui-03,#e2e6e3);--as--range-slider--range-color:var(--as--color--primary,#1785fb);display:block;height:32px}as-range-slider .as-range-slider--disabled{pointer-events:none}as-range-slider .as-range-slider__rail{display:-ms-flexbox;display:flex;position:relative;width:calc(100% - 12px);height:12px;margin:auto}as-range-slider .as-range-slider__rail:before{content:\" \";position:absolute;z-index:0;top:50%;left:0;width:100%;height:2px;-webkit-transform:translate3d(0,-50%,0);transform:translate3d(0,-50%,0);background-color:var(--as--range-slider--rail-color,#e2e6e3);pointer-events:none}as-range-slider .as-range-slider__rail-label{visibility:hidden;position:absolute;top:16px;-webkit-transform:translate3d(-50%,0,0);transform:translate3d(-50%,0,0);white-space:nowrap}as-range-slider .as-range-slider__rail-label.as-range-slider__rail-label__overflow--left{-webkit-transform:translate3d(-6px,0,0);transform:translate3d(-6px,0,0)}as-range-slider .as-range-slider__rail-label.as-range-slider__rail-label__overflow--right{-webkit-transform:translate3d(calc(-100% + 6px),0,0);transform:translate3d(calc(-100% + 6px),0,0)}as-range-slider .as-range-slider__rail-label .as-range-slider__label-separator{display:inline-block;width:8px;-webkit-transition:opacity .2s ease-in;transition:opacity .2s ease-in;opacity:0;text-align:center}as-range-slider .as-range-slider__rail-label.as-range-slider__rail-label--active{visibility:visible}as-range-slider .as-range-slider__rail-label.as-range-slider__rail-label--active .as-range-slider__label-separator{opacity:1}"; },
        enumerable: true,
        configurable: true
    });
    return class_1;
}());
function isColliding(a, b, margin) {
    return !(((a.y + a.height) < (b.y)) ||
        (a.y > (b.y + b.height)) ||
        ((a.x + a.width + margin) < b.x) ||
        (a.x > (b.x + b.width + margin)));
}
export { RangeSlider as as_range_slider };
