import { h } from "@stencil/core";
/**
 * Helper class to draw widget selections
 *
 * @export
 * @class WidgetSelection
 */
export class WidgetSelection {
    constructor() {
        /**
         * Text for the clear text
         *
         * @type {string}
         * @memberof WidgetSelection
         */
        this.clearText = 'Clear selection';
    }
    render() {
        return h("div", { class: 'as-color--type-01 as-widget-selection__wrapper' },
            h("span", { class: 'as-widget-selection__selection as-body' }, this.selection),
            this.showClear ? this.renderClearBtn() : '');
    }
    renderClearBtn() {
        return (h("span", { class: 'as-body as-color--primary as-widget-selection__clear', onClick: () => { this.clear.emit(); } }, this.clearText));
    }
    static get is() { return "as-widget-selection"; }
    static get originalStyleUrls() { return {
        "$": ["./as-widget-selection.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["as-widget-selection.css"]
    }; }
    static get properties() { return {
        "selection": {
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
                "tags": [{
                        "text": "{string}",
                        "name": "type"
                    }, {
                        "text": "WidgetSelection",
                        "name": "memberof"
                    }],
                "text": "The text to be displayed"
            },
            "attribute": "selection",
            "reflect": false
        },
        "clearText": {
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
                "tags": [{
                        "text": "{string}",
                        "name": "type"
                    }, {
                        "text": "WidgetSelection",
                        "name": "memberof"
                    }],
                "text": "Text for the clear text"
            },
            "attribute": "clear-text",
            "reflect": false,
            "defaultValue": "'Clear selection'"
        },
        "showClear": {
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
                "tags": [{
                        "text": "{boolean}",
                        "name": "type"
                    }, {
                        "text": "WidgetSelection",
                        "name": "memberof"
                    }],
                "text": "Whether to display the clear button or not"
            },
            "attribute": "show-clear",
            "reflect": false
        }
    }; }
    static get events() { return [{
            "method": "clear",
            "name": "clear",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [{
                        "text": undefined,
                        "name": "private"
                    }, {
                        "text": "WidgetSelection",
                        "name": "memberof"
                    }],
                "text": "Event fired when clicking on clear text"
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }]; }
}
