import { h } from "@stencil/core";
import { borderStyleCounts } from '../../../utils/border-style-counts';
// This component ignores the strokeWidth property, and always paints
// a 1px border.
const FAKE_BORDER_SIZE = 1;
export class LegendSizeBinsPoint {
    constructor() {
        this.orientation = 'vertical';
        this.width = null;
    }
    render() {
        if (!this.data) {
            return null;
        }
        const classes = {
            'as-legend-size-bins-point--steps': true,
            [`as-legend-size-bins-point--${this.orientation}`]: true
        };
        this.maxSize = this.width || this.data.slice().sort((first, second) => second.width - first.width)[0].width;
        return h("div", { class: classes }, this.data.map((data) => this.renderStep(data)));
    }
    renderStep(data) {
        const strokeStyle = `${FAKE_BORDER_SIZE}px ${data.strokeStyle || 'solid'} ${data.strokeColor}`;
        // Elements are box-sizing: border-box, so we have to compensate
        const sizeOffset = borderStyleCounts(data.strokeStyle)
            ? FAKE_BORDER_SIZE * 2
            : 0;
        const SIZE = Math.round(data.width) + sizeOffset;
        const SIZE_PX = `${SIZE}px`;
        const MAX_SIZE = SIZE > this.maxSize ? SIZE : this.maxSize + sizeOffset;
        const MAX_SIZE_PX = `${MAX_SIZE}px`;
        const mask = this.getMask(data);
        const wrapperStyle = {};
        if (this.orientation === 'horizontal') {
            wrapperStyle.height = MAX_SIZE_PX;
        }
        else if (this.orientation === 'vertical') {
            wrapperStyle.width = MAX_SIZE_PX;
        }
        const style = Object.assign({ backgroundColor: data.color, border: strokeStyle, height: SIZE_PX, width: SIZE_PX }, mask);
        return (h("div", { class: 'as-legend-size-bins-point--step' },
            h("div", { style: wrapperStyle, class: 'as-legend-size-bins-point--circle-wrapper' },
                h("div", { class: 'as-legend-size-bins-point--circle', style: style })),
            h("span", { class: 'as-legend-size-bins-point--label' }, data.label)));
    }
    getMask(data) {
        if (!data.marker) {
            return {};
        }
        return {
            '-webkit-mask-image': `url(${data.marker})`,
            '-webkit-mask-position': 'center',
            '-webkit-mask-repeat': 'no-repeat',
            '-webkit-mask-size': `${data.width}px`,
            'maskImage': `url(${data.marker})`,
            'maskPosition': 'center',
            'maskRepeat': 'no-repeat',
            'maskSize': `${data.width}px`
        };
    }
    static get is() { return "as-legend-size-bins-point"; }
    static get originalStyleUrls() { return {
        "$": ["./as-legend-size-bins-point.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["as-legend-size-bins-point.css"]
    }; }
    static get properties() { return {
        "data": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "LegendData[]",
                "resolved": "LegendData[]",
                "references": {
                    "LegendData": {
                        "location": "global"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            }
        },
        "orientation": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "'horizontal' | 'vertical'",
                "resolved": "\"horizontal\" | \"vertical\"",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "orientation",
            "reflect": false,
            "defaultValue": "'vertical'"
        },
        "width": {
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
            "attribute": "width",
            "reflect": false,
            "defaultValue": "null"
        }
    }; }
}
