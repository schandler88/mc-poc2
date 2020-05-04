import { r as registerInstance, c as createEvent, h, g as getElement } from './core-a69618da.js';
function handleMouseDown(listeners) {
    var handleMove = function (eventProperties) {
        listeners.move(eventProperties);
        eventProperties.preventDefault();
        eventProperties.stopPropagation();
    };
    var handleRelease = function (eventProperties) {
        _handleRelease(eventProperties, { move: handleMove, release: handleRelease }, listeners);
        eventProperties.preventDefault();
        eventProperties.stopPropagation();
    };
    document.addEventListener('mousemove', handleMove);
    document.addEventListener('touchmove', handleMove);
    document.addEventListener('mouseup', handleRelease);
    document.addEventListener('touchend', handleRelease);
    document.addEventListener('dragstart', preventAndStop);
}
function _handleRelease(eventProperties, listeners, customListeners) {
    document.removeEventListener('mousemove', listeners.move);
    document.removeEventListener('touchmove', listeners.move);
    document.removeEventListener('mouseup', listeners.release);
    document.removeEventListener('touchend', listeners.release);
    document.removeEventListener('dragstart', preventAndStop);
    if (customListeners.move) {
        customListeners.move(eventProperties);
    }
    if (customListeners.release) {
        customListeners.release(eventProperties);
    }
}
function preventAndStop(event) {
    event.preventDefault();
    event.stopPropagation();
}
var MAX_PERCENTAGE = 100;
var MIN_PERCENTAGE = 0;
var RangeSliderBar = /** @class */ (function () {
    function class_1(hostRef) {
        registerInstance(this, hostRef);
        this.barMove = createEvent(this, "barMove", 7);
        this.barChangeStart = createEvent(this, "barChangeStart", 7);
        this.barChangeEnd = createEvent(this, "barChangeEnd", 7);
    }
    class_1.prototype.render = function () {
        var barStyles = {
            left: this.rangeStartPercentage + "%",
            width: this.rangeEndPercentage - this.rangeStartPercentage + "%"
        };
        var cssClasses = {
            'as-range-slider__range-bar': true,
            'as-range-slider__range-bar--disabled': this.disabled,
            'as-range-slider__range-bar--draggable': this.isDraggable
        };
        return h("div", { class: cssClasses, style: barStyles });
    };
    class_1.prototype.onMouseDown = function (event) {
        var _this = this;
        if (!this.isDraggable) {
            return;
        }
        this.barChangeStart.emit();
        this.railElement = document.querySelector('.as-range-slider__rail');
        this.rangeBarElement = this.element.querySelector('.as-range-slider__range-bar');
        this.previousMouseEvent = event;
        handleMouseDown({
            move: function (moveEvent) { return _this.onMove(moveEvent); },
            release: function () { return _this._onRelease(); }
        });
    };
    class_1.prototype.onMove = function (event) {
        if (!this.previousMouseEvent) {
            this.previousMouseEvent = event;
            return;
        }
        this.setCursorTo('grabbing');
        if (this.rangeBarElement && this.rangeBarElement.classList) {
            this.rangeBarElement.classList.add('as-range-slider__range-bar--moving');
        }
        var rangeDifference = this._getRangeDifference();
        var movementDelta = this._getMovementDelta(event, this.previousMouseEvent);
        var barXPosition = this.rangeBarElement.offsetLeft + movementDelta;
        var leftPercentage = barXPosition * 100 / this.railElement.offsetWidth;
        var rightPercentage = leftPercentage + rangeDifference;
        if (leftPercentage < MIN_PERCENTAGE) {
            leftPercentage = MIN_PERCENTAGE;
            rightPercentage = leftPercentage + rangeDifference;
        }
        if (rightPercentage > MAX_PERCENTAGE) {
            rightPercentage = MAX_PERCENTAGE;
            leftPercentage = rightPercentage - rangeDifference;
        }
        var thresholdPassed = this._updateRangePercentages([leftPercentage, rightPercentage]);
        if (thresholdPassed) {
            this.previousMouseEvent = event;
        }
        this.barMove.emit([this.rangeStartPercentage, this.rangeEndPercentage]);
    };
    class_1.prototype._updateRangePercentages = function (percentages) {
        var leftPercentage = percentages[0], rightPercentage = percentages[1];
        var direction = (leftPercentage < this.rangeStartPercentage) ? -1 : 1;
        var delta = Math.abs(this.rangeStartPercentage - leftPercentage);
        var threshold = this.stepPercentage;
        var rangeDifference = this._getRangeDifference();
        if (delta >= threshold) {
            this.rangeStartPercentage += direction * delta;
            this.rangeEndPercentage += direction * delta;
            return true;
        }
        if (rightPercentage > (MAX_PERCENTAGE - threshold)) {
            this.rangeStartPercentage = MAX_PERCENTAGE - rangeDifference;
            this.rangeEndPercentage = MAX_PERCENTAGE;
            return false;
        }
        if (leftPercentage < (MIN_PERCENTAGE + threshold)) {
            this.rangeStartPercentage = MIN_PERCENTAGE;
            this.rangeEndPercentage = MIN_PERCENTAGE + rangeDifference;
            return false;
        }
    };
    class_1.prototype._onRelease = function () {
        this.setCursorTo('');
        if (this.rangeBarElement && this.rangeBarElement.classList) {
            this.rangeBarElement.classList.remove('as-range-slider__range-bar--moving');
        }
        this.barChangeEnd.emit();
    };
    class_1.prototype._getMovementDelta = function (currentEvent, previousEvent) {
        var currentChangedTouches = currentEvent.changedTouches;
        var previousChangedTouches = previousEvent.changedTouches;
        var currentEventX = currentChangedTouches
            ? currentChangedTouches[0].pageX
            : currentEvent.pageX;
        var previousEventX = previousChangedTouches
            ? previousChangedTouches[0].pageX
            : previousEvent.pageX;
        return currentEventX - previousEventX;
    };
    class_1.prototype._getRangeDifference = function () {
        return this.rangeEndPercentage - this.rangeStartPercentage;
    };
    class_1.prototype.setCursorTo = function (value) {
        document.body.style.cursor = value;
    };
    Object.defineProperty(class_1.prototype, "element", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_1, "style", {
        get: function () { return "as-range-slider-bar{--as--range-slider__range-bar--background-color:var(--as--color--primary,#1785fb);--as--range-slider__range-bar--background-color--disabled:var(--as--color--ui-03,#e2e6e3)}as-range-slider-bar .as-range-slider__range-bar{position:absolute;z-index:1;top:50%;height:2px;-webkit-transform:translate3d(0,-50%,0);transform:translate3d(0,-50%,0);background-color:var(--as--range-slider__range-bar--background-color,#1785fb)}as-range-slider-bar .as-range-slider__range-bar--disabled{background-color:var(--as--range-slider__range-bar--background-color--disabled)}as-range-slider-bar .as-range-slider__range-bar--draggable{cursor:-webkit-grab;cursor:grab}as-range-slider-bar .as-range-slider__range-bar--draggable:after{content:\" \";position:absolute;top:-6px;left:0;width:calc(100% - 20px);height:12px;-webkit-transform:translate3d(10px,0,0);transform:translate3d(10px,0,0)}as-range-slider-bar .as-range-slider__range-bar--moving{cursor:-webkit-grabbing;cursor:grabbing}"; },
        enumerable: true,
        configurable: true
    });
    return class_1;
}());
var RangeSliderThumb = /** @class */ (function () {
    function class_2(hostRef) {
        registerInstance(this, hostRef);
        this.showCaption = true;
        this.thumbMove = createEvent(this, "thumbMove", 7);
        this.thumbChangeStart = createEvent(this, "thumbChangeStart", 7);
        this.thumbChangeEnd = createEvent(this, "thumbChangeEnd", 7);
        this.thumbIncrease = createEvent(this, "thumbIncrease", 7);
        this.thumbDecrease = createEvent(this, "thumbDecrease", 7);
        this.thumbRender = createEvent(this, "thumbRender", 7);
    }
    class_2.prototype.componentDidRender = function () {
        this.thumbRender.emit();
    };
    class_2.prototype.render = function () {
        var thumbStyles = {
            left: this.percentage + "%"
        };
        var cssClasses = {
            'as-range-slider__thumb': true,
            'as-range-slider__thumb--disabled': this.disabled
        };
        return (h("div", { role: 'slider', tabindex: this.disabled ? '-1' : '0', "aria-valuetext": this._getDisplayValue(this.value), "aria-valuenow": this.value, "aria-valuemin": this.valueMin, "aria-valuemax": this.valueMax, class: cssClasses, style: thumbStyles, "data-value": this.value }, h("div", { class: 'as-range-slider__thumb-handle' }), this._renderDisplayValue()));
    };
    class_2.prototype.onMouseDown = function (event) {
        var _this = this;
        this.thumbChangeStart.emit();
        this.railElement = document.querySelector('.as-range-slider__rail');
        var thumb = event.target;
        thumb.classList.add('as-range-slider__thumb-handle--moving');
        this.railBoundingClientRect = this.railElement.getBoundingClientRect();
        handleMouseDown({
            move: function (moveEvent) { return _this._onMove(moveEvent); },
            release: function () { return _this._onRelease(thumb); }
        });
        thumb.focus();
    };
    class_2.prototype.onKeyDown = function (event) {
        if (this.disabled) {
            return;
        }
        var KEY = {
            DOWN: 40,
            LEFT: 37,
            RIGHT: 39,
            UP: 38
        };
        var flag = false;
        switch (event.keyCode) {
            case KEY.DOWN:
            case KEY.LEFT:
                this.thumbDecrease.emit();
                flag = true;
                break;
            case KEY.UP:
            case KEY.RIGHT:
                this.thumbIncrease.emit();
                flag = true;
                break;
            default:
                break;
        }
        if (flag) {
            event.preventDefault();
            event.stopPropagation();
        }
    };
    class_2.prototype._onMove = function (event) {
        this.setCursorTo('grabbing');
        var changedTouches = event.changedTouches;
        var eventX = changedTouches ? changedTouches[0].pageX : event.pageX;
        var barPercentage = (eventX - this.railBoundingClientRect.left) * 100 / this.railElement.offsetWidth;
        if (barPercentage < 0 && this.percentage > 0) {
            return this.thumbMove.emit(0);
        }
        if (barPercentage > 100 && this.percentage < 100) {
            return this.thumbMove.emit(100);
        }
        if (barPercentage < 0 || barPercentage > 100) {
            return;
        }
        this.thumbMove.emit(barPercentage);
    };
    class_2.prototype._onRelease = function (thumb) {
        thumb.classList.remove('as-range-slider__thumb-handle--moving');
        this.setCursorTo('');
        this.thumbChangeEnd.emit();
    };
    class_2.prototype._renderDisplayValue = function () {
        var cssValueClasses = {
            'as-caption': true,
            'as-font-medium': true,
            'as-range-slider__value': true,
            'as-range-slider__value--disabled': this.disabled,
            'as-range-slider__value--hidden': !this.showCaption,
        };
        return (h("span", { class: cssValueClasses }, this._getDisplayValue(this.value)));
    };
    class_2.prototype._getDisplayValue = function (value) {
        return (this.formatValue && this.formatValue(value)) || value;
    };
    class_2.prototype.setCursorTo = function (value) {
        document.body.style.cursor = value;
    };
    Object.defineProperty(class_2.prototype, "element", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_2, "style", {
        get: function () { return "as-range-slider-thumb .as-range-slider__thumb{--as--range-slider--disabled--value--color:var(--as--color--ui-03,#e2e6e3);--as--range-slider--thumb-handle--border-color:var(--as--color--primary,#1785fb);--as--range-slider--thumb-handle--background-color:var(--as--color--white,#fff);--as--range-slider--disabled--thumb-handle--border-color:var(--as--color--ui-03,#e2e6e3);--as--range-slider--disabled--thumb-handle--background-color:var(--as--color--ui-02,#f5f5f5);--as--range-slider--disabled--thumb-handle--focus-background-color:var(--as--color--ui-02,#f5f5f5);--as--range-slider--focus--thumb-handle--background-color:var(--as--color--primary,#1785fb);position:absolute;z-index:2;width:12px;height:12px;-webkit-transform:translate3d(-6px,0,0);transform:translate3d(-6px,0,0);-webkit-transition:opacity .2s ease,-webkit-transform .2s ease;transition:opacity .2s ease,-webkit-transform .2s ease;transition:transform .2s ease,opacity .2s ease;transition:transform .2s ease,opacity .2s ease,-webkit-transform .2s ease}as-range-slider-thumb .as-range-slider__value{position:absolute;bottom:-16px;left:50%;-webkit-transform:translate3d(-50%,0,0);transform:translate3d(-50%,0,0);-webkit-transition:-webkit-transform .2s ease;transition:-webkit-transform .2s ease;transition:transform .2s ease;transition:transform .2s ease,-webkit-transform .2s ease;pointer-events:none}as-range-slider-thumb .as-range-slider__value--disabled{color:var(--as--range-slider--disabled--value--color)}as-range-slider-thumb .as-range-slider__value--hidden{visibility:hidden;opacity:0}as-range-slider-thumb .as-range-slider__thumb-handle{width:12px;height:12px;-webkit-transition:-webkit-transform .2s ease;transition:-webkit-transform .2s ease;transition:transform .2s ease;transition:transform .2s ease,-webkit-transform .2s ease;border:1px solid var(--as--range-slider--thumb-handle--border-color);border-radius:50%;background-color:var(--as--range-slider--thumb-handle--background-color);cursor:-webkit-grab;cursor:grab}as-range-slider-thumb .as-range-slider__thumb-handle:before{content:\"\";position:absolute;top:-15px;left:-15px;width:30px;height:30px}as-range-slider-thumb .as-range-slider__thumb-handle.as-range-slider__thumb-handle--moving,as-range-slider-thumb .as-range-slider__thumb-handle:hover{-webkit-transform:scale(1.33);transform:scale(1.33)}as-range-slider-thumb .as-range-slider__thumb-handle--moving{cursor:-webkit-grabbing;cursor:grabbing}as-range-slider-thumb .as-range-slider__thumb--disabled .as-range-slider__thumb-handle{border:1px solid var(--as--range-slider--disabled--thumb-handle--border-color);background-color:var(--as--range-slider--disabled--thumb-handle--background-color)}as-range-slider-thumb .as-range-slider__thumb--disabled .as-range-slider__thumb-handle:focus{background:var(--as--range-slider--disabled--thumb-handle--focus-background-color)}as-range-slider-thumb .as-range-slider__thumb:focus{outline:none}as-range-slider-thumb .as-range-slider__thumb:focus .as-range-slider__thumb-handle{background:var(--as--range-slider--focus--thumb-handle--background-color)}as-range-slider-thumb .as-range-slider__thumb+.as-range-slider__thumb:hover{-webkit-transform:translate3d(-6px,0,0) scale(1.33);transform:translate3d(-6px,0,0) scale(1.33)}"; },
        enumerable: true,
        configurable: true
    });
    return class_2;
}());
export { RangeSliderBar as as_range_slider_bar, RangeSliderThumb as as_range_slider_thumb };
