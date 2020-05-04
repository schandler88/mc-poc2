import { r as registerInstance, c as createEvent, h } from './core-a69618da.js';
var LayerSelector = /** @class */ (function () {
    function class_1(hostRef) {
        registerInstance(this, hostRef);
        this.layers = [];
        this.onToggleLayer = createEvent(this, "onToggleLayer", 7);
    }
    class_1.prototype.onToggleCheckbox = function (evt) {
        this.onToggleLayer.emit(evt.detail);
    };
    class_1.prototype.render = function () {
        return (h("div", { class: 'as-layer-selector--wrapper' }, this.layers.map(this._renderCheckbox.bind(this))));
    };
    class_1.prototype._renderCheckbox = function (layer, index) {
        return h("as-layer-selector-slot", { layer: layer, index: index }, h("slot", { name: "as-checkbox-layer-" + index + "-slot" }));
    };
    Object.defineProperty(class_1, "style", {
        get: function () { return "as-layer-selector{display:block;padding:12px 12px 0}"; },
        enumerable: true,
        configurable: true
    });
    return class_1;
}());
export { LayerSelector as as_layer_selector };
