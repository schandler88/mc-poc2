'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-894cddb9.js');

function handleMouseDown(listeners) {
    const handleMove = (eventProperties) => {
        listeners.move(eventProperties);
        eventProperties.preventDefault();
        eventProperties.stopPropagation();
    };
    const handleRelease = (eventProperties) => {
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

const MAX_PERCENTAGE = 100;
const MIN_PERCENTAGE = 0;
const RangeSliderBar = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
        this.barMove = core.createEvent(this, "barMove", 7);
        this.barChangeStart = core.createEvent(this, "barChangeStart", 7);
        this.barChangeEnd = core.createEvent(this, "barChangeEnd", 7);
    }
    render() {
        const barStyles = {
            left: `${this.rangeStartPercentage}%`,
            width: `${this.rangeEndPercentage - this.rangeStartPercentage}%`
        };
        const cssClasses = {
            'as-range-slider__range-bar': true,
            'as-range-slider__range-bar--disabled': this.disabled,
            'as-range-slider__range-bar--draggable': this.isDraggable
        };
        return core.h("div", { class: cssClasses, style: barStyles });
    }
    onMouseDown(event) {
        if (!this.isDraggable) {
            return;
        }
        this.barChangeStart.emit();
        this.railElement = document.querySelector('.as-range-slider__rail');
        this.rangeBarElement = this.element.querySelector('.as-range-slider__range-bar');
        this.previousMouseEvent = event;
        handleMouseDown({
            move: (moveEvent) => this.onMove(moveEvent),
            release: () => this._onRelease()
        });
    }
    onMove(event) {
        if (!this.previousMouseEvent) {
            this.previousMouseEvent = event;
            return;
        }
        this.setCursorTo('grabbing');
        if (this.rangeBarElement && this.rangeBarElement.classList) {
            this.rangeBarElement.classList.add('as-range-slider__range-bar--moving');
        }
        const rangeDifference = this._getRangeDifference();
        const movementDelta = this._getMovementDelta(event, this.previousMouseEvent);
        const barXPosition = this.rangeBarElement.offsetLeft + movementDelta;
        let leftPercentage = barXPosition * 100 / this.railElement.offsetWidth;
        let rightPercentage = leftPercentage + rangeDifference;
        if (leftPercentage < MIN_PERCENTAGE) {
            leftPercentage = MIN_PERCENTAGE;
            rightPercentage = leftPercentage + rangeDifference;
        }
        if (rightPercentage > MAX_PERCENTAGE) {
            rightPercentage = MAX_PERCENTAGE;
            leftPercentage = rightPercentage - rangeDifference;
        }
        const thresholdPassed = this._updateRangePercentages([leftPercentage, rightPercentage]);
        if (thresholdPassed) {
            this.previousMouseEvent = event;
        }
        this.barMove.emit([this.rangeStartPercentage, this.rangeEndPercentage]);
    }
    _updateRangePercentages(percentages) {
        const [leftPercentage, rightPercentage] = percentages;
        const direction = (leftPercentage < this.rangeStartPercentage) ? -1 : 1;
        const delta = Math.abs(this.rangeStartPercentage - leftPercentage);
        const threshold = this.stepPercentage;
        const rangeDifference = this._getRangeDifference();
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
    }
    _onRelease() {
        this.setCursorTo('');
        if (this.rangeBarElement && this.rangeBarElement.classList) {
            this.rangeBarElement.classList.remove('as-range-slider__range-bar--moving');
        }
        this.barChangeEnd.emit();
    }
    _getMovementDelta(currentEvent, previousEvent) {
        const currentChangedTouches = currentEvent.changedTouches;
        const previousChangedTouches = previousEvent.changedTouches;
        const currentEventX = currentChangedTouches
            ? currentChangedTouches[0].pageX
            : currentEvent.pageX;
        const previousEventX = previousChangedTouches
            ? previousChangedTouches[0].pageX
            : previousEvent.pageX;
        return currentEventX - previousEventX;
    }
    _getRangeDifference() {
        return this.rangeEndPercentage - this.rangeStartPercentage;
    }
    setCursorTo(value) {
        document.body.style.cursor = value;
    }
    get element() { return core.getElement(this); }
    static get style() { return "as-range-slider-bar{--as--range-slider__range-bar--background-color:var(--as--color--primary,#1785fb);--as--range-slider__range-bar--background-color--disabled:var(--as--color--ui-03,#e2e6e3)}as-range-slider-bar .as-range-slider__range-bar{position:absolute;z-index:1;top:50%;height:2px;-webkit-transform:translate3d(0,-50%,0);transform:translate3d(0,-50%,0);background-color:var(--as--range-slider__range-bar--background-color,#1785fb)}as-range-slider-bar .as-range-slider__range-bar--disabled{background-color:var(--as--range-slider__range-bar--background-color--disabled)}as-range-slider-bar .as-range-slider__range-bar--draggable{cursor:-webkit-grab;cursor:grab}as-range-slider-bar .as-range-slider__range-bar--draggable:after{content:\" \";position:absolute;top:-6px;left:0;width:calc(100% - 20px);height:12px;-webkit-transform:translate3d(10px,0,0);transform:translate3d(10px,0,0)}as-range-slider-bar .as-range-slider__range-bar--moving{cursor:-webkit-grabbing;cursor:grabbing}"; }
};

const RangeSliderThumb = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
        this.showCaption = true;
        this.thumbMove = core.createEvent(this, "thumbMove", 7);
        this.thumbChangeStart = core.createEvent(this, "thumbChangeStart", 7);
        this.thumbChangeEnd = core.createEvent(this, "thumbChangeEnd", 7);
        this.thumbIncrease = core.createEvent(this, "thumbIncrease", 7);
        this.thumbDecrease = core.createEvent(this, "thumbDecrease", 7);
        this.thumbRender = core.createEvent(this, "thumbRender", 7);
    }
    componentDidRender() {
        this.thumbRender.emit();
    }
    render() {
        const thumbStyles = {
            left: `${this.percentage}%`
        };
        const cssClasses = {
            'as-range-slider__thumb': true,
            'as-range-slider__thumb--disabled': this.disabled
        };
        return (core.h("div", { role: 'slider', tabindex: this.disabled ? '-1' : '0', "aria-valuetext": this._getDisplayValue(this.value), "aria-valuenow": this.value, "aria-valuemin": this.valueMin, "aria-valuemax": this.valueMax, class: cssClasses, style: thumbStyles, "data-value": this.value }, core.h("div", { class: 'as-range-slider__thumb-handle' }), this._renderDisplayValue()));
    }
    onMouseDown(event) {
        this.thumbChangeStart.emit();
        this.railElement = document.querySelector('.as-range-slider__rail');
        const thumb = event.target;
        thumb.classList.add('as-range-slider__thumb-handle--moving');
        this.railBoundingClientRect = this.railElement.getBoundingClientRect();
        handleMouseDown({
            move: (moveEvent) => this._onMove(moveEvent),
            release: () => this._onRelease(thumb)
        });
        thumb.focus();
    }
    onKeyDown(event) {
        if (this.disabled) {
            return;
        }
        const KEY = {
            DOWN: 40,
            LEFT: 37,
            RIGHT: 39,
            UP: 38
        };
        let flag = false;
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
    }
    _onMove(event) {
        this.setCursorTo('grabbing');
        const changedTouches = event.changedTouches;
        const eventX = changedTouches ? changedTouches[0].pageX : event.pageX;
        const barPercentage = (eventX - this.railBoundingClientRect.left) * 100 / this.railElement.offsetWidth;
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
    }
    _onRelease(thumb) {
        thumb.classList.remove('as-range-slider__thumb-handle--moving');
        this.setCursorTo('');
        this.thumbChangeEnd.emit();
    }
    _renderDisplayValue() {
        const cssValueClasses = {
            'as-caption': true,
            'as-font-medium': true,
            'as-range-slider__value': true,
            'as-range-slider__value--disabled': this.disabled,
            'as-range-slider__value--hidden': !this.showCaption,
        };
        return (core.h("span", { class: cssValueClasses }, this._getDisplayValue(this.value)));
    }
    _getDisplayValue(value) {
        return (this.formatValue && this.formatValue(value)) || value;
    }
    setCursorTo(value) {
        document.body.style.cursor = value;
    }
    get element() { return core.getElement(this); }
    static get style() { return "as-range-slider-thumb .as-range-slider__thumb{--as--range-slider--disabled--value--color:var(--as--color--ui-03,#e2e6e3);--as--range-slider--thumb-handle--border-color:var(--as--color--primary,#1785fb);--as--range-slider--thumb-handle--background-color:var(--as--color--white,#fff);--as--range-slider--disabled--thumb-handle--border-color:var(--as--color--ui-03,#e2e6e3);--as--range-slider--disabled--thumb-handle--background-color:var(--as--color--ui-02,#f5f5f5);--as--range-slider--disabled--thumb-handle--focus-background-color:var(--as--color--ui-02,#f5f5f5);--as--range-slider--focus--thumb-handle--background-color:var(--as--color--primary,#1785fb);position:absolute;z-index:2;width:12px;height:12px;-webkit-transform:translate3d(-6px,0,0);transform:translate3d(-6px,0,0);-webkit-transition:opacity .2s ease,-webkit-transform .2s ease;transition:opacity .2s ease,-webkit-transform .2s ease;transition:transform .2s ease,opacity .2s ease;transition:transform .2s ease,opacity .2s ease,-webkit-transform .2s ease}as-range-slider-thumb .as-range-slider__value{position:absolute;bottom:-16px;left:50%;-webkit-transform:translate3d(-50%,0,0);transform:translate3d(-50%,0,0);-webkit-transition:-webkit-transform .2s ease;transition:-webkit-transform .2s ease;transition:transform .2s ease;transition:transform .2s ease,-webkit-transform .2s ease;pointer-events:none}as-range-slider-thumb .as-range-slider__value--disabled{color:var(--as--range-slider--disabled--value--color)}as-range-slider-thumb .as-range-slider__value--hidden{visibility:hidden;opacity:0}as-range-slider-thumb .as-range-slider__thumb-handle{width:12px;height:12px;-webkit-transition:-webkit-transform .2s ease;transition:-webkit-transform .2s ease;transition:transform .2s ease;transition:transform .2s ease,-webkit-transform .2s ease;border:1px solid var(--as--range-slider--thumb-handle--border-color);border-radius:50%;background-color:var(--as--range-slider--thumb-handle--background-color);cursor:-webkit-grab;cursor:grab}as-range-slider-thumb .as-range-slider__thumb-handle:before{content:\"\";position:absolute;top:-15px;left:-15px;width:30px;height:30px}as-range-slider-thumb .as-range-slider__thumb-handle.as-range-slider__thumb-handle--moving,as-range-slider-thumb .as-range-slider__thumb-handle:hover{-webkit-transform:scale(1.33);transform:scale(1.33)}as-range-slider-thumb .as-range-slider__thumb-handle--moving{cursor:-webkit-grabbing;cursor:grabbing}as-range-slider-thumb .as-range-slider__thumb--disabled .as-range-slider__thumb-handle{border:1px solid var(--as--range-slider--disabled--thumb-handle--border-color);background-color:var(--as--range-slider--disabled--thumb-handle--background-color)}as-range-slider-thumb .as-range-slider__thumb--disabled .as-range-slider__thumb-handle:focus{background:var(--as--range-slider--disabled--thumb-handle--focus-background-color)}as-range-slider-thumb .as-range-slider__thumb:focus{outline:none}as-range-slider-thumb .as-range-slider__thumb:focus .as-range-slider__thumb-handle{background:var(--as--range-slider--focus--thumb-handle--background-color)}as-range-slider-thumb .as-range-slider__thumb+.as-range-slider__thumb:hover{-webkit-transform:translate3d(-6px,0,0) scale(1.33);transform:translate3d(-6px,0,0) scale(1.33)}"; }
};

exports.as_range_slider_bar = RangeSliderBar;
exports.as_range_slider_thumb = RangeSliderThumb;
