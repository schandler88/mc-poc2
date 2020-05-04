'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-894cddb9.js');

const LayerSelector = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
        this.layers = [];
        this.onToggleLayer = core.createEvent(this, "onToggleLayer", 7);
    }
    onToggleCheckbox(evt) {
        this.onToggleLayer.emit(evt.detail);
    }
    render() {
        return (core.h("div", { class: 'as-layer-selector--wrapper' }, this.layers.map(this._renderCheckbox.bind(this))));
    }
    _renderCheckbox(layer, index) {
        return core.h("as-layer-selector-slot", { layer: layer, index: index }, core.h("slot", { name: `as-checkbox-layer-${index}-slot` }));
    }
    static get style() { return "as-layer-selector{display:block;padding:12px 12px 0}"; }
};

exports.as_layer_selector = LayerSelector;
