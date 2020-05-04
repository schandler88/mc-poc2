import { h } from "@stencil/core";
export class LegendSizeBinsLine {
    constructor() {
        this.orientation = 'vertical';
        this.width = null;
    }
    render() {
        if (!this.data) {
            return null;
        }
        const outerClasses = {
            'as-legend-size-bins-line--outer-wrapper': true,
            [`as-legend-size-bins-line--${this.orientation}`]: true
        };
        const wrapperStyle = {
            width: this.width !== null && this.orientation === 'vertical' ? `${this.width}px` : null
        };
        return h("div", { class: outerClasses },
            h("div", { style: wrapperStyle, class: 'as-legend-size-bins-line--wrapper as-legend-size-bins-line--color' }, this.data.map((d) => this.renderStep(d))),
            h("div", { class: 'as-legend-size-bins-line--wrapper as-legend-size-bins-line--labels' }, this.data.map(this.renderLabels)));
    }
    renderStep(data) {
        const prop = this.orientation === 'vertical' ? 'width' : 'height';
        const style = {
            background: data.color,
            [prop]: `${data.width}px`
        };
        return (h("div", { class: 'as-legend-size-bins-line--step', style: style }));
    }
    renderLabels(data) {
        return (h("div", { class: 'as-legend-size-bins-line--label' },
            h("span", null, data.label)));
    }
    static get is() { return "as-legend-size-bins-line"; }
    static get originalStyleUrls() { return {
        "$": ["./as-legend-size-bins-line.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["as-legend-size-bins-line.css"]
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
