import { h } from "@stencil/core";
export class LegendSizeContinuous {
    constructor() {
        this.orientation = 'vertical';
        this.scale = 1;
    }
    render() {
        if (!this.data || this.data.length === 0) {
            return null;
        }
        const classes = {
            'as-legend-size-continuous--overflow': this.data[0].type === 'line'
        };
        return h("div", { class: classes }, this.renderLegend(this.data));
    }
    renderLegend(data) {
        switch (data[0].type) {
            case 'point':
                return h("as-legend-size-continuous-point", { data: this.data, orientation: this.orientation, scale: this.scale });
            case 'line':
                return h("as-legend-size-continuous-line", { data: this.data, orientation: this.orientation });
            default:
                return null;
        }
    }
    static get is() { return "as-legend-size-continuous"; }
    static get originalStyleUrls() { return {
        "$": ["./as-legend-size-continuous.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["as-legend-size-continuous.css"]
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
        "scale": {
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
            "attribute": "scale",
            "reflect": false,
            "defaultValue": "1"
        }
    }; }
}
