import { h } from "@stencil/core";
export class LegendColorCategoryPoint {
    render() {
        // TODO: check if all values are type: point?
        return (h("as-legend-category", { data: this.data, orientation: this.orientation, width: this.width }));
    }
    static get is() { return "as-legend-color-category-point"; }
    static get styles() { return "as-legend-color-category-point { display: block; }"; }
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
            "reflect": false
        }
    }; }
}
