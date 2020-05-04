import { h } from "@stencil/core";
export class LegendColorCategoryPolygonEntry {
    render() {
        return (h("div", { class: 'as-legend-category-polygon-entry--wrapper' },
            h("div", { class: 'as-legend-category--figure--wrapper' },
                h("div", { class: 'as-legend-category-polygon-entry--box', style: this.getStyle() })),
            h("span", { class: 'as-legend-category--label' }, this.label)));
    }
    getStyle() {
        return {
            backgroundColor: this.color,
            border: `1px ${this.strokeStyle || 'solid'} ${this.strokeColor}`
        };
    }
    static get is() { return "as-legend-category-polygon-entry"; }
    static get originalStyleUrls() { return {
        "$": ["./as-legend-category-polygon-entry.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["as-legend-category-polygon-entry.css"]
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
        }
    }; }
}
