import { h } from "@stencil/core";
const MAX_WIDTH = 16;
export class LegendCategoryLineEntry {
    constructor() {
        this.strokeStyle = 'solid';
        this.width = 1.5;
    }
    componentWillLoad() {
        this._widthChanged(this.width);
    }
    render() {
        return (h("div", { class: 'as-legend-category-line-entry--wrapper' },
            h("div", { class: 'as-legend-category--figure--wrapper' },
                h("div", { class: 'as-legend-category-line-entry--line', style: this.getStyle() })),
            h("span", { class: 'as-legend-category--label' }, this.label)));
    }
    _widthChanged(newValue) {
        this._width = Math.min(MAX_WIDTH, newValue);
    }
    getStyle() {
        return {
            borderTopColor: this.color,
            borderTopStyle: this.strokeStyle,
            borderTopWidth: `${this._width}`
        };
    }
    static get is() { return "as-legend-category-line-entry"; }
    static get originalStyleUrls() { return {
        "$": ["./as-legend-category-line-entry.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["as-legend-category-line-entry.css"]
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
            "reflect": false,
            "defaultValue": "'solid'"
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
            "defaultValue": "1.5"
        }
    }; }
    static get states() { return {
        "_width": {}
    }; }
    static get watchers() { return [{
            "propName": "width",
            "methodName": "_widthChanged"
        }]; }
}
