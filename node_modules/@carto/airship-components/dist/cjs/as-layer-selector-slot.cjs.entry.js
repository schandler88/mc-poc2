'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-894cddb9.js');

const LayerSelectorSlot = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
        this.visible = true;
        this.onToggleCheckbox = core.createEvent(this, "onToggleCheckbox", 7);
    }
    toggleCheckbox() {
        this.visible = !this.visible;
    }
    render() {
        return (core.h("div", { class: 'as-layer-selector-slot--wrapper' }, core.h("div", { class: 'as-checkbox' }, core.h("input", { class: 'as-checkbox-input', type: 'checkbox', id: `checkbox-${this.index}`, name: `layer-${this.layer.id}`, value: `layer-${this.layer.id}`, onChange: this._onChange.bind(this, this.index), checked: true }), core.h("span", { class: 'as-checkbox-decoration' }, core.h("svg", { class: 'as-checkbox-media' }, core.h("polyline", { class: 'as-checkbox-check', points: '1.65093994 3.80255127 4.48919678 6.97192383 10.3794556 0.717346191' }))), core.h("label", { class: 'as-caption', htmlFor: `checkbox-${this.index}` }, this.layer.title)), core.h("div", { class: `as-checkbox-layer-slot ${this.visible ? 'as-checkbox-layer-slot--visible' : 'as-checkbox-layer-slot--hidden'}` }, core.h("slot", { name: `as-checkbox-layer-${this.index}-slot` }))));
    }
    _onChange(index, event) {
        this.toggleCheckbox();
        this.onToggleCheckbox.emit({ event, index });
    }
    static get style() { return "as-layer-selector-slot{display:block}as-layer-selector-slot .as-checkbox-layer-slot.as-checkbox-layer-slot--visible{display:block;margin:12px 0}as-layer-selector-slot .as-checkbox-layer-slot.as-checkbox-layer-slot--hidden{display:none}as-layer-selector-slot .as-checkbox-layer-slot .as-legend--wrapper{padding:var(--as-legend--padding) 0}as-layer-selector-slot .as-layer-selector-slot--wrapper .as-caption{font-size:var(--as--font--subheader);line-height:var(--as--font--subheader)}"; }
};

exports.as_layer_selector_slot = LayerSelectorSlot;
