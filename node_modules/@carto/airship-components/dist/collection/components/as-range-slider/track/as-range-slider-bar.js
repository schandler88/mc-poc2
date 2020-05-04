import { h } from "@stencil/core";
import { handleMouseDown } from '../MouseTrack';
const MAX_PERCENTAGE = 100;
const MIN_PERCENTAGE = 0;
export class RangeSliderBar {
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
        return h("div", { class: cssClasses, style: barStyles });
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
    static get is() { return "as-range-slider-bar"; }
    static get originalStyleUrls() { return {
        "$": ["./as-range-slider-bar.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["as-range-slider-bar.css"]
    }; }
    static get properties() { return {
        "rangeStartPercentage": {
            "type": "number",
            "mutable": true,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "range-start-percentage",
            "reflect": false
        },
        "rangeEndPercentage": {
            "type": "number",
            "mutable": true,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "range-end-percentage",
            "reflect": false
        },
        "stepPercentage": {
            "type": "number",
            "mutable": false,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "step-percentage",
            "reflect": false
        },
        "isDraggable": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "is-draggable",
            "reflect": false
        },
        "disabled": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "disabled",
            "reflect": false
        }
    }; }
    static get events() { return [{
            "method": "barMove",
            "name": "barMove",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "complexType": {
                "original": "number[]",
                "resolved": "number[]",
                "references": {}
            }
        }, {
            "method": "barChangeStart",
            "name": "barChangeStart",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "complexType": {
                "original": "void",
                "resolved": "void",
                "references": {}
            }
        }, {
            "method": "barChangeEnd",
            "name": "barChangeEnd",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "complexType": {
                "original": "void",
                "resolved": "void",
                "references": {}
            }
        }]; }
    static get elementRef() { return "element"; }
    static get listeners() { return [{
            "name": "mousedown",
            "method": "onMouseDown",
            "target": undefined,
            "capture": false,
            "passive": true
        }, {
            "name": "touchstart",
            "method": "onMouseDown",
            "target": undefined,
            "capture": false,
            "passive": true
        }]; }
}
