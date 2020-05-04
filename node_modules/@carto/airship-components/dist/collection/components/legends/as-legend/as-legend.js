import { h } from "@stencil/core";
export class Legend {
    render() {
        return (h("div", { class: 'as-legend--wrapper' },
            this.renderHeader(),
            this.renderContent()));
    }
    renderContent() {
        if (this.loading) {
            return null;
        }
        return [
            h("div", { class: 'as-legend--legends-slot' },
                h("slot", { name: 'legends' })),
            h("slot", { name: 'footer' })
        ];
    }
    renderHeader() {
        if (this.heading || this.description) {
            return h("as-widget-header", { header: this.heading, subheader: this.description });
        }
    }
    static get is() { return "as-legend"; }
    static get originalStyleUrls() { return {
        "$": ["./as-legend.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["as-legend.css"]
    }; }
    static get properties() { return {
        "loading": {
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
            "attribute": "loading",
            "reflect": false
        },
        "heading": {
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
            "attribute": "heading",
            "reflect": false
        },
        "description": {
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
            "attribute": "description",
            "reflect": false
        }
    }; }
}
