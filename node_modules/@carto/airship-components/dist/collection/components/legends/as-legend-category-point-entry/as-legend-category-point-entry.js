import { h } from "@stencil/core";
import { borderStyleCounts } from '../../../utils/border-style-counts';
// This component ignores the strokeWidth property, and always paints
// a 1px border.
const FAKE_BORDER_SIZE = 1;
const DEFAULT_WIDTH = 16;
// Required for background masks to work properly
const SYMBOL_OFFSET = 2;
export class LegendCategoryPointEntry {
    constructor() {
        this.width = DEFAULT_WIDTH;
    }
    render() {
        const classes = {
            'as-legend-category-point-entry--point': !this.marker,
            'as-legend-category-point-entry--symbol': true
        };
        return (h("div", { class: 'as-legend-category-point-entry--wrapper' },
            h("div", { class: 'as-legend-category--figure--wrapper' },
                h("div", { class: classes, style: this.getStyle() })),
            h("span", { class: 'as-legend-category--label' }, this.label)));
    }
    getStyle() {
        return Object.assign({ backgroundColor: this.color, border: `${FAKE_BORDER_SIZE}px ${this.strokeStyle || 'solid'} ${this.strokeColor}` }, this.getWidth(), this.getMask());
    }
    getWidth() {
        if (!this.width) {
            return {};
        }
        let sizeOffset = borderStyleCounts(this.strokeStyle)
            ? FAKE_BORDER_SIZE * 2
            : 0;
        if (this.marker) {
            sizeOffset += SYMBOL_OFFSET;
        }
        return {
            height: `${this.width + sizeOffset}px`,
            width: `${this.width + sizeOffset}px`
        };
    }
    getMask() {
        if (!this.marker) {
            return {};
        }
        return {
            '-webkit-mask-image': `url(${this.marker})`,
            '-webkit-mask-position': 'center',
            '-webkit-mask-repeat': 'no-repeat',
            '-webkit-mask-size': `${this.width}px`,
            'maskImage': `url(${this.marker})`,
            'maskPosition': 'center',
            'maskRepeat': 'no-repeat',
            'maskSize': `${this.width}px`
        };
    }
    static get is() { return "as-legend-category-point-entry"; }
    static get originalStyleUrls() { return {
        "$": ["./as-legend-category-point-entry.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["as-legend-category-point-entry.css"]
    }; }
    static get properties() { return {
        "label": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "label",
            "reflect": false
        },
        "color": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "color",
            "reflect": false
        },
        "strokeColor": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "stroke-color",
            "reflect": false
        },
        "strokeStyle": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "stroke-style",
            "reflect": false
        },
        "marker": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "marker",
            "reflect": false
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
            "defaultValue": "DEFAULT_WIDTH"
        }
    }; }
}
