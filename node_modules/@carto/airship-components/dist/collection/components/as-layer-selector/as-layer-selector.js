import { h } from "@stencil/core";
/**
 * Layer Selector
 *
 * @export
 * @class LayerSelector
 */
export class LayerSelector {
    constructor() {
        this.layers = [];
    }
    onToggleCheckbox(evt) {
        this.onToggleLayer.emit(evt.detail);
    }
    render() {
        return (h("div", { class: 'as-layer-selector--wrapper' }, this.layers.map(this._renderCheckbox.bind(this))));
    }
    _renderCheckbox(layer, index) {
        return h("as-layer-selector-slot", { layer: layer, index: index },
            h("slot", { name: `as-checkbox-layer-${index}-slot` }));
    }
    static get is() { return "as-layer-selector"; }
    static get originalStyleUrls() { return {
        "$": ["./as-layer-selector.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["as-layer-selector.css"]
    }; }
    static get properties() { return {
        "layers": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "string[]",
                "resolved": "string[]",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "defaultValue": "[]"
        }
    }; }
    static get events() { return [{
            "method": "onToggleLayer",
            "name": "onToggleLayer",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }]; }
    static get listeners() { return [{
            "name": "onToggleCheckbox",
            "method": "onToggleCheckbox",
            "target": undefined,
            "capture": false,
            "passive": false
        }]; }
}
