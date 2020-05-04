import { h } from "@stencil/core";
export class LegendColorBinsPolygon {
    constructor() {
        this.orientation = 'vertical';
    }
    render() {
        if (!this.data) {
            return null;
        }
        const outerClasses = {
            'as-legend-color-bins-polygon--outer-wrapper': true,
            [`as-legend-color-bins-polygon--${this.orientation}`]: true
        };
        return h("div", { class: outerClasses },
            h("div", { class: 'as-legend-color-bins-polygon--wrapper as-legend-color-bins-polygon--color' }, this.data.map(this.renderStep)),
            h("div", { class: 'as-legend-color-bins-polygon--wrapper as-legend-color-bins-polygon--labels' }, this.data.map(this.renderLabels)));
    }
    renderStep(data) {
        return (h("div", { class: 'as-legend-color-bins-polygon--step', style: { background: data.color } }));
    }
    renderLabels(data) {
        return (h("div", { class: 'as-legend-color-bins-polygon--label' },
            h("span", null, data.label)));
    }
    static get is() { return "as-legend-color-bins-polygon"; }
    static get originalStyleUrls() { return {
        "$": ["./as-legend-color-bins-polygon.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["as-legend-color-bins-polygon.css"]
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
        }
    }; }
}
