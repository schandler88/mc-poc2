import { r as registerInstance, c as createEvent, h, g as getElement } from './core-a69618da.js';

function getDecimalPlaces(decimalNumber) {
    // Copied this method from: https://bit.ly/2DfxbfQ
    function hasFraction(numberToCheck) {
        return Math.abs(Math.round(numberToCheck) - numberToCheck) > 1e-10;
    }
    let count = 0;
    // multiply by increasing powers of 10 until the fractional part is ~ 0
    while (hasFraction(decimalNumber * (10 ** count)) && isFinite(10 ** count)) {
        count++;
    }
    return count;
}

const RangeSlider = class {
    constructor(hostRef) {
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
    validateValue(newValue) {
        if (!this._isBetweenValidValues(newValue)) {
            throw new Error(`RangeSlider: Value ${newValue} has to be between ` +
                `minValue (${this.minValue}) and maxValue (${this.maxValue})`);
        }
        this._updateThumbs();
    }
    validateRange(newRange) {
        if (newRange.length !== 2) {
            throw new Error(`RangeSlider: Range ${newRange} need two values at most`);
        }
        newRange.map((value) => this.validateValue(value));
        this._updateThumbs();
    }
    componentWillLoad() {
        this._validateValues();
        this._updateThumbs();
    }
    componentDidRender() {
        this._checkLabelOverflow();
    }
    componentDidLoad() {
        this.checkThumbCollision();
    }
    render() {
        if (this.thumbs.length < 1) {
            return;
        }
        const cssClasses = {
            'as-range-slider': true,
            'as-range-slider--disabled': this.disabled
        };
        return (h("div", { class: cssClasses }, h("div", { class: 'as-range-slider__rail' }, this.thumbs.map((thumb) => this._renderThumb(thumb)), this._renderRangeBar(), this._renderCollapsedLabel())));
    }
    _getLabelOffsetPercentage() {
        const difference = this.thumbs[1].percentage - this.thumbs[0].percentage;
        return this.thumbs[0].percentage + (difference / 2);
    }
    _updateThumbs() {
        this.thumbs = this._createThumbs();
    }
    _renderThumb(thumb) {
        if (this.showThumb) {
            return h("as-range-slider-thumb", { value: thumb.value, valueMin: thumb.valueMin, valueMax: thumb.valueMax, percentage: thumb.percentage, disabled: this.disabled, formatValue: this.formatValue, showCaption: this._shouldShowCaption(), onThumbMove: (event) => this._onThumbMove(thumb, event.detail), onThumbIncrease: () => this._onKeyboardThumbMove(thumb, +1), onThumbDecrease: () => this._onKeyboardThumbMove(thumb, -1), onThumbChangeStart: () => this._emitChangeIn(this.changeStart), onThumbChangeEnd: () => this._emitChangeIn(this.changeEnd), onThumbRender: () => this.checkThumbCollision() });
        }
    }
    _renderRangeBar() {
        const [firstThumbPercentage, lastThumbPercentage] = this._getCurrentThumbPercentages();
        const isDraggable = (this.isDraggable || this.draggable) && this.range !== undefined;
        return h("as-range-slider-bar", { rangeStartPercentage: firstThumbPercentage, rangeEndPercentage: lastThumbPercentage, isDraggable: isDraggable, disabled: this.disabled, stepPercentage: this._getStepPercentage(), onBarChangeStart: () => this._emitChangeIn(this.changeStart), onBarChangeEnd: () => this._emitChangeIn(this.changeEnd), onBarMove: (event) => this._onBarMove(event) });
    }
    _renderCollapsedLabel() {
        if (this.thumbs.length !== 2) {
            return;
        }
        const defaultFormatValue = (value) => value;
        const formatValue = this.formatValue || defaultFormatValue;
        const labelOffsetPercentage = this._getLabelOffsetPercentage();
        const thumbsBalancedLeft = this.thumbs[0].percentage < 50;
        const positionStyles = {
            left: `${labelOffsetPercentage}%`
        };
        const classes = {
            'as-caption': true,
            'as-font-medium': true,
            'as-range-slider__rail-label': true,
            'as-range-slider__rail-label--active': this.areLabelsColliding,
            'as-range-slider__rail-label__overflow--left': this.isLeftLabelOverflowing && thumbsBalancedLeft,
            'as-range-slider__rail-label__overflow--right': this.isRightLabelOverflowing && !thumbsBalancedLeft
        };
        return (h("div", { class: classes, style: positionStyles }, formatValue(this.thumbs[0].value), h("span", { class: 'as-range-slider__label-separator' }, "\u2014"), formatValue(this.thumbs[1].value)));
    }
    _getCurrentThumbPercentages() {
        const firstThumbPercentage = this._sliderHasRange() ? this.thumbs[0].percentage : 0;
        const lastThumbPercentage = this.thumbs[this.thumbs.length - 1].percentage;
        return [firstThumbPercentage, lastThumbPercentage];
    }
    _shouldShowCaption() {
        return !this.areLabelsColliding && this.showThumbCaption;
    }
    _validateValues() {
        if (this.value) {
            this.validateValue(this.value);
            return;
        }
        if (this.range) {
            this.validateRange(this.range);
            return;
        }
    }
    _createThumbs() {
        const hasRangeValues = this.range && this.range.length;
        if (!hasRangeValues) {
            return [this._getThumbData(this.value)];
        }
        const thumbs = this.range.map((value) => this._getThumbData(value));
        this._clampThumbValues(thumbs);
        return thumbs;
    }
    _getThumbData(value) {
        return {
            percentage: this._isBetweenValidValues(value) ?
                this._getPercentage(value)
                : this._getPercentage(this.minValue),
            value: this._isBetweenValidValues(value) ? value : this.minValue,
            valueMax: this.maxValue,
            valueMin: this.minValue
        };
    }
    _isBetweenValidValues(value) {
        return value >= this.minValue && value <= this.maxValue;
    }
    _sliderHasRange() {
        return this.range && this.range.length === 2;
    }
    _onKeyboardThumbMove(thumb, direction) {
        const percentage = this._getPercentage(thumb.value + (direction * this.step));
        if (percentage < 0 || percentage > 100) {
            return;
        }
        this._onThumbMove(thumb, percentage);
    }
    _onThumbMove(thumb, percentage) {
        const [leftThumb, rightThumb] = this.thumbs;
        const isLeftThumb = leftThumb === thumb;
        const isRightThumb = rightThumb === thumb;
        const value = this._getValueFromPercentage(percentage);
        const stepValue = this._getStepValue(value);
        const stepPercentage = this._getPercentage(stepValue);
        let valueMin = this.minValue;
        let valueMax = this.maxValue;
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
        this.thumbs = [...this.thumbs];
        this._emitChangeIn(this.change);
    }
    _onBarMove(percentage) {
        const percentageRange = percentage.detail;
        const rangeValues = percentageRange.map((p) => this._getValueFromPercentage(p));
        const stepValues = rangeValues.map((value) => this._getStepValue(value));
        const thumbs = stepValues.map((stepValue) => ({
            percentage: this._getPercentage(stepValue),
            value: stepValue
        }));
        this._clampThumbValues(thumbs);
        this.thumbs = [...thumbs];
        this._emitChangeIn(this.change);
    }
    _emitChangeIn(eventEmitterInstance) {
        const values = this.thumbs.map((thumb) => thumb.value);
        return eventEmitterInstance.emit(values);
    }
    _getPercentage(value) {
        return ((value - this.minValue) / (this.maxValue - this.minValue)) * 100;
    }
    _getValueFromPercentage(percentage) {
        return ((percentage * (this.maxValue - this.minValue)) / 100) + this.minValue;
    }
    _getStepPercentage() {
        const range = (this.maxValue - this.minValue);
        return this.step * 100 / range;
    }
    _clampThumbValues(thumbs) {
        const [leftThumb, rightThumb] = thumbs;
        leftThumb.valueMin = this.minValue;
        leftThumb.valueMax = Math.min(rightThumb.value - this.step, this.maxValue);
        rightThumb.valueMin = Math.max(this.minValue, leftThumb.value + this.step);
        rightThumb.valueMax = this.maxValue;
    }
    _getStepValue(value) {
        const stepValue = Math.max(this.minValue, Math.round(value / this.step) * this.step);
        return this.roundToStep(stepValue, this.step);
    }
    roundToStep(numberToRound, step) {
        return Number.parseFloat(numberToRound.toFixed(getDecimalPlaces(step)));
    }
    _checkLabelOverflow() {
        const thumbLabels = this.element.querySelectorAll('as-range-slider-thumb .as-range-slider__value');
        if (thumbLabels) {
            const { overflow: leftLabelOverflows } = this.checkOverflowInParentContainer(thumbLabels[0]);
            const { overflow: rightLabelOverflows } = (thumbLabels.length > 1)
                ? this.checkOverflowInParentContainer(thumbLabels[1])
                : { overflow: false };
            this.isLeftLabelOverflowing = leftLabelOverflows;
            this.isRightLabelOverflowing = rightLabelOverflows;
        }
    }
    checkThumbCollision() {
        const thumbLabels = this.element.querySelectorAll('as-range-slider-thumb .as-range-slider__value');
        if (!thumbLabels || thumbLabels.length !== 2) {
            return;
        }
        const leftThumbLabel = thumbLabels[0];
        const rightThumbLabel = thumbLabels[1];
        const leftThumbLabelCR = leftThumbLabel.getBoundingClientRect();
        const rightThumbLabelCR = rightThumbLabel.getBoundingClientRect();
        this.areLabelsColliding = isColliding(leftThumbLabelCR, rightThumbLabelCR, 8);
    }
    checkOverflowInParentContainer(labelElement) {
        if (labelElement) {
            const containerElement = this.element.parentElement;
            const containerBCR = containerElement.getBoundingClientRect();
            const labelBCR = labelElement.getBoundingClientRect();
            const isOverflowingLeft = containerBCR.left > labelBCR.left;
            const isOverflowingRight = containerBCR.right < labelBCR.left + labelBCR.width;
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
    }
    get element() { return getElement(this); }
    static get watchers() { return {
        "value": ["validateValue"],
        "range": ["validateRange"]
    }; }
    static get style() { return "as-range-slider{--as--range-slider--rail-color:var(--as--color--ui-03,#e2e6e3);--as--range-slider--range-color:var(--as--color--primary,#1785fb);display:block;height:32px}as-range-slider .as-range-slider--disabled{pointer-events:none}as-range-slider .as-range-slider__rail{display:-ms-flexbox;display:flex;position:relative;width:calc(100% - 12px);height:12px;margin:auto}as-range-slider .as-range-slider__rail:before{content:\" \";position:absolute;z-index:0;top:50%;left:0;width:100%;height:2px;-webkit-transform:translate3d(0,-50%,0);transform:translate3d(0,-50%,0);background-color:var(--as--range-slider--rail-color,#e2e6e3);pointer-events:none}as-range-slider .as-range-slider__rail-label{visibility:hidden;position:absolute;top:16px;-webkit-transform:translate3d(-50%,0,0);transform:translate3d(-50%,0,0);white-space:nowrap}as-range-slider .as-range-slider__rail-label.as-range-slider__rail-label__overflow--left{-webkit-transform:translate3d(-6px,0,0);transform:translate3d(-6px,0,0)}as-range-slider .as-range-slider__rail-label.as-range-slider__rail-label__overflow--right{-webkit-transform:translate3d(calc(-100% + 6px),0,0);transform:translate3d(calc(-100% + 6px),0,0)}as-range-slider .as-range-slider__rail-label .as-range-slider__label-separator{display:inline-block;width:8px;-webkit-transition:opacity .2s ease-in;transition:opacity .2s ease-in;opacity:0;text-align:center}as-range-slider .as-range-slider__rail-label.as-range-slider__rail-label--active{visibility:visible}as-range-slider .as-range-slider__rail-label.as-range-slider__rail-label--active .as-range-slider__label-separator{opacity:1}"; }
};
function isColliding(a, b, margin) {
    return !(((a.y + a.height) < (b.y)) ||
        (a.y > (b.y + b.height)) ||
        ((a.x + a.width + margin) < b.x) ||
        (a.x > (b.x + b.width + margin)));
}

export { RangeSlider as as_range_slider };
