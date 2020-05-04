import { r as registerInstance, c as createEvent, h } from './core-a69618da.js';

const LayerSelector = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.layers = [];
        this.onToggleLayer = createEvent(this, "onToggleLayer", 7);
    }
    onToggleCheckbox(evt) {
        this.onToggleLayer.emit(evt.detail);
    }
    render() {
        return (h("div", { class: 'as-layer-selector--wrapper' }, this.layers.map(this._renderCheckbox.bind(this))));
    }
    _renderCheckbox(layer, index) {
        return h("as-layer-selector-slot", { layer: layer, index: index }, h("slot", { name: `as-checkbox-layer-${index}-slot` }));
    }
    static get style() { return "as-layer-selector{display:block;padding:12px 12px 0}"; }
};

export { LayerSelector as as_layer_selector };
