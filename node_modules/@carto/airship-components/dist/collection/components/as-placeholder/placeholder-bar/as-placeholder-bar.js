import { h, Host } from "@stencil/core";
export class PlaceholderBar {
    render() {
        const styles = {
            height: this.height,
            width: this.width
        };
        return (h(Host, { style: styles },
            h("div", { class: 'placeholder-bar' })));
    }
    static get is() { return "as-placeholder-bar"; }
    static get originalStyleUrls() { return {
        "$": ["./as-placeholder-bar.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["as-placeholder-bar.css"]
    }; }
    static get properties() { return {
        "width": {
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
            "attribute": "width",
            "reflect": false
        },
        "height": {
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
            "attribute": "height",
            "reflect": false
        }
    }; }
}
