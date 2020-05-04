import { h } from "@stencil/core";
const MIN_WIDTH = 16;
export class LegendColorCategory {
    render() {
        if (!this.data || this.data.length === 0) {
            return null;
        }
        const wrapper = {
            'as-legend-category--wrapper': true,
            'as-legend-category--wrapper-horizontal': this.orientation === 'horizontal'
        };
        return h("div", { style: this.getStyle(), class: wrapper }, this.data
            .map((e) => this.renderLegend(e))
            .filter((e) => e !== null)
            .map((e) => h("div", { class: 'as-legend-category--entry' }, e)));
    }
    renderLegend(legend) {
        switch (legend.type) {
            case 'point':
                return h("as-legend-category-point-entry", { label: legend.label, width: this.width || legend.width, color: legend.color, strokeColor: legend.strokeColor, marker: legend.marker, strokeStyle: legend.strokeStyle });
            case 'line':
                return h("as-legend-category-line-entry", { label: legend.label, width: legend.width, color: legend.color, strokeStyle: legend.strokeStyle });
            case 'polygon':
                return h("as-legend-category-polygon-entry", { label: legend.label, color: legend.color, strokeColor: legend.strokeColor, strokeStyle: legend.strokeStyle });
            default:
                return null;
        }
    }
    getStyle() {
        const maxLegendWidth = this.data.slice().sort((first, second) => second.width - first.width)[0].width;
        return {
            '--as--basic--legend--figure-width': `${this.width || Math.max(maxLegendWidth, MIN_WIDTH)}px`
        };
    }
    static get is() { return "as-legend-category"; }
    static get originalStyleUrls() { return {
        "$": ["./as-legend-category.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["as-legend-category.css"]
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
