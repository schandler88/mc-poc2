import { h } from "@stencil/core";
/**
 * Helper class to draw widget headers
 *
 * @export
 * @class WidgetHeader
 */
export class WidgetHeader {
    constructor() {
        /**
         * Main title
         *
         * @type {string}
         * @memberof WidgetHeader
         */
        this.header = '';
        /**
         * Secondary title
         *
         * @type {string}
         * @memberof WidgetHeader
         */
        this.subheader = '';
        /**
         * Use this attribute to put the widget-header in "error mode".
         * When this attribute is not empty the subheader will display the given value.
         */
        this.error = '';
        /**
         * Use this attribute to put the widget-header in "empty mode".
         * When this attribute is true the subheader will show the text defined by noDataMessage.
         */
        this.isEmpty = false;
        /**
         * Use this attribute to put the widget-header in "loading mode".
         * When this attribute is true the subheader text will be displayed as usual.
         */
        this.isLoading = false;
        /**
         * Use this attribute to select the text displayed in the subheader when the header is in "empty mode".
         * Defaults to "NO DATA AVAILABLE"
         */
        this.noDataMessage = 'NO DATA AVAILABLE';
    }
    render() {
        return [
            h("h2", { class: 'as-widget-header__header' }, this.header),
            this._getSubHeader(),
        ];
    }
    _getSubHeader() {
        if (this.isLoading) {
            return h("p", { class: 'as-widget-header__subheader as-body' }, this.subheader);
        }
        if (this.error) {
            return h("p", { class: 'as-widget-header__subheader as-widget-header__subheader--error as-body' }, this.error);
        }
        if (this.isEmpty) {
            return h("p", { class: 'as-widget-header__subheader as-widget-header__subheader--empty as-body' }, this.noDataMessage);
        }
        return h("p", { class: 'as-widget-header__subheader as-body' }, this.subheader);
    }
    static get is() { return "as-widget-header"; }
    static get originalStyleUrls() { return {
        "$": ["./as-widget-header.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["as-widget-header.css"]
    }; }
    static get properties() { return {
        "header": {
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
                        "text": "WidgetHeader",
                        "name": "memberof"
                    }],
                "text": "Main title"
            },
            "attribute": "header",
            "reflect": false,
            "defaultValue": "''"
        },
        "subheader": {
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
                        "text": "WidgetHeader",
                        "name": "memberof"
                    }],
                "text": "Secondary title"
            },
            "attribute": "subheader",
            "reflect": false,
            "defaultValue": "''"
        },
        "error": {
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
                "text": "Use this attribute to put the widget-header in \"error mode\".\nWhen this attribute is not empty the subheader will display the given value."
            },
            "attribute": "error",
            "reflect": false,
            "defaultValue": "''"
        },
        "isEmpty": {
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
                "text": "Use this attribute to put the widget-header in \"empty mode\".\nWhen this attribute is true the subheader will show the text defined by noDataMessage."
            },
            "attribute": "is-empty",
            "reflect": false,
            "defaultValue": "false"
        },
        "isLoading": {
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
                "text": "Use this attribute to put the widget-header in \"loading mode\".\nWhen this attribute is true the subheader text will be displayed as usual."
            },
            "attribute": "is-loading",
            "reflect": false,
            "defaultValue": "false"
        },
        "noDataMessage": {
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
                "text": "Use this attribute to select the text displayed in the subheader when the header is in \"empty mode\".\nDefaults to \"NO DATA AVAILABLE\""
            },
            "attribute": "no-data-message",
            "reflect": false,
            "defaultValue": "'NO DATA AVAILABLE'"
        }
    }; }
}
