import { r as registerInstance, h, g as getElement } from './core-a69618da.js';
var Toolbar = /** @class */ (function () {
    function class_1(hostRef) {
        registerInstance(this, hostRef);
    }
    class_1.prototype.componentWillLoad = function () {
        this.actions = this.element.querySelector('.as-toolbar__actions');
    };
    class_1.prototype.componentWillUpdate = function () {
        this.actions = this.element.querySelector('.as-toolbar__actions');
    };
    class_1.prototype.render = function () {
        return (h("header", { class: 'as-toolbar' }, this._renderToggleButton(), h("slot", null)));
    };
    class_1.prototype._toggleDrawer = function () {
        this.actions.classList.toggle('as-toolbar__actions--visible');
    };
    class_1.prototype._renderToggleButton = function () {
        if (!this.actions) {
            return;
        }
        return (h("button", { onClick: this._toggleDrawer.bind(this), class: 'as-toolbar__item as-toolbar__toggle' }, h("i", { class: 'as-icon as-icon-hamburger as-title as-m--0' })));
    };
    Object.defineProperty(class_1.prototype, "element", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_1, "style", {
        get: function () { return "as-toolbar{display:block;z-index:3}"; },
        enumerable: true,
        configurable: true
    });
    return class_1;
}());
export { Toolbar as as_toolbar };
