import { h } from "@stencil/core";
export class LegendSizeBins {
    constructor() {
        this.orientation = 'vertical';
        this.width = null;
    }
    render() {
        if (!this.data || this.data.length === 0) {
            return null;
        }
        return this.renderLegend(this.data);
    }
    renderLegend(data) {
        switch (data[0].type) {
            case 'point':
                return h("as-legend-size-bins-point", { data: this.data, orientation: this.orientation, width: this.width });
            case 'line':
                return h("as-legend-size-bins-line", { data: this.data, orientation: this.orientation, width: this.width });
            default:
                return null;
        }
    }
    static get is() { return "as-legend-size-bins"; }
    static get originalStyleUrls() { return {
        "$": ["./as-legend-size-bins.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["as-legend-size-bins.css"]
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
