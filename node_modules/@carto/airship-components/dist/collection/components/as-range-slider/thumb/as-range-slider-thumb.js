import { h } from "@stencil/core";
import { handleMouseDown } from '../MouseTrack';
export class RangeSliderThumb {
    constructor() {
        this.showCaption = true;
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
        return (h("div", { role: 'slider', tabindex: this.disabled ? '-1' : '0', "aria-valuetext": this._getDisplayValue(this.value), "aria-valuenow": this.value, "aria-valuemin": this.valueMin, "aria-valuemax": this.valueMax, class: cssClasses, style: thumbStyles, "data-value": this.value },
            h("div", { class: 'as-range-slider__thumb-handle' }),
            this._renderDisplayValue()));
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
        return (h("span", { class: cssValueClasses }, this._getDisplayValue(this.value)));
    }
    _getDisplayValue(value) {
        return (this.formatValue && this.formatValue(value)) || value;
    }
    setCursorTo(value) {
        document.body.style.cursor = value;
    }
    static get is() { return "as-range-slider-thumb"; }
    static get originalStyleUrls() { return {
        "$": ["./as-range-slider-thumb.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["as-range-slider-thumb.css"]
    }; }
    static get properties() { return {
        "percentage": {
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
            "attribute": "percentage",
            "reflect": false
        },
        "value": {
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
            "attribute": "value",
            "reflect": false
        },
        "valueMin": {
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
            "attribute": "value-min",
            "reflect": false
        },
        "valueMax": {
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
            "attribute": "value-max",
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
        },
        "showCaption": {
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
            "attribute": "show-caption",
            "reflect": false,
            "defaultValue": "true"
        },
        "formatValue": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "(value: number) => string|number",
                "resolved": "(value: number) => string | number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            }
        }
    }; }
    static get events() { return [{
            "method": "thumbMove",
            "name": "thumbMove",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            }
        }, {
            "method": "thumbChangeStart",
            "name": "thumbChangeStart",
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
            "method": "thumbChangeEnd",
            "name": "thumbChangeEnd",
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
            "method": "thumbIncrease",
            "name": "thumbIncrease",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            }
        }, {
            "method": "thumbDecrease",
            "name": "thumbDecrease",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            }
        }, {
            "method": "thumbRender",
            "name": "thumbRender",
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
        }, {
            "name": "keydown",
            "method": "onKeyDown",
            "target": undefined,
            "capture": false,
            "passive": false
        }]; }
}
