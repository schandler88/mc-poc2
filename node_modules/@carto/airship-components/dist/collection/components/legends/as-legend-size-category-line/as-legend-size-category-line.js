import { h } from "@stencil/core";
const MIN_WIDTH = 48;
const FACTOR = 3;
export class LegendSizeBinsPoint {
    constructor() {
        this.orientation = 'vertical';
        this.aligned = false;
        this.factor = FACTOR;
        this.minWidth = MIN_WIDTH;
    }
    render() {
        if (!this.data) {
            return null;
        }
        const classes = {
            'as-legend-size-category-line--steps': true,
            [`as-legend-size-category-line--${this.orientation}`]: true
        };
        this.maxSize = this.data.slice().sort((first, second) => second.width - first.width)[0].width;
        return h("div", { class: classes }, this.data.map((data) => this.renderStep(data)));
    }
    renderStep(data) {
        const strokeStyle = {
            borderTopColor: `${data.color}`,
            borderTopStyle: `${data.strokeStyle || 'solid'}`,
            borderTopWidth: `${data.width}px`
        };
        const lineWidth = Math.max(MIN_WIDTH, this.maxSize * this.factor);
        const style = Object.assign({ height: `${data.width}px`, width: `${lineWidth}px` }, strokeStyle);
        const wrapperStyle = {};
        if (this.orientation === 'horizontal') {
            wrapperStyle.height = `${lineWidth}px`;
            if (this.aligned) {
                style.marginBottom = `${(this.maxSize - data.width) / 2}px`;
            }
        }
        else if (this.orientation === 'vertical') {
            wrapperStyle.width = `${lineWidth}px`;
        }
        return (h("div", { class: 'as-legend-size-category-line--step' },
            h("div", { style: wrapperStyle, class: 'as-legend-size-category-line--line-wrapper' },
                h("div", { class: 'as-legend-size-category-line--line', style: style })),
            h("span", { class: 'as-legend-size-category-line--label' }, data.label)));
    }
    static get is() { return "as-legend-size-category-line"; }
    static get originalStyleUrls() { return {
        "$": ["./as-legend-size-category-line.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["as-legend-size-category-line.css"]
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
        "aligned": {
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
            "attribute": "aligned",
            "reflect": false,
            "defaultValue": "false"
        },
        "factor": {
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
            "attribute": "factor",
            "reflect": false,
            "defaultValue": "FACTOR"
        },
        "minWidth": {
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
            "attribute": "min-width",
            "reflect": false,
            "defaultValue": "MIN_WIDTH"
        }
    }; }
}
