import { h } from "@stencil/core";
/**
 * Layer Selector Slot
 *
 * @export
 * @class LayerSelectorSlot
 */
export class LayerSelectorSlot {
    constructor() {
        this.visible = true;
    }
    toggleCheckbox() {
        this.visible = !this.visible;
    }
    render() {
        return (h("div", { class: 'as-layer-selector-slot--wrapper' },
            h("div", { class: 'as-checkbox' },
                h("input", { class: 'as-checkbox-input', type: 'checkbox', id: `checkbox-${this.index}`, name: `layer-${this.layer.id}`, value: `layer-${this.layer.id}`, onChange: this._onChange.bind(this, this.index), checked: true }),
                h("span", { class: 'as-checkbox-decoration' },
                    h("svg", { class: 'as-checkbox-media' },
                        h("polyline", { class: 'as-checkbox-check', points: '1.65093994 3.80255127 4.48919678 6.97192383 10.3794556 0.717346191' }))),
                h("label", { class: 'as-caption', htmlFor: `checkbox-${this.index}` }, this.layer.title)),
            h("div", { class: `as-checkbox-layer-slot ${this.visible ? 'as-checkbox-layer-slot--visible' : 'as-checkbox-layer-slot--hidden'}` },
                h("slot", { name: `as-checkbox-layer-${this.index}-slot` }))));
    }
    _onChange(index, event) {
        this.toggleCheckbox();
        this.onToggleCheckbox.emit({ event, index });
    }
    static get is() { return "as-layer-selector-slot"; }
    static get originalStyleUrls() { return {
        "$": ["./as-layer-selector-slot.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["as-layer-selector-slot.css"]
    }; }
    static get properties() { return {
        "layer": {
            "type": "any",
            "mutable": false,
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "layer",
            "reflect": false
        },
        "index": {
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
            "attribute": "index",
            "reflect": false
        }
    }; }
    static get states() { return {
        "visible": {}
    }; }
    static get events() { return [{
            "method": "onToggleCheckbox",
            "name": "onToggleCheckbox",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "This method proxies the toggleLayer event"
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }]; }
}
