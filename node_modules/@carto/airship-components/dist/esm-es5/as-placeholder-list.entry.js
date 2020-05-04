import { r as registerInstance, h } from './core-a69618da.js';
var LoadingBar = /** @class */ (function () {
    function class_1(hostRef) {
        registerInstance(this, hostRef);
    }
    class_1.prototype.render = function () {
        return [
            this.renderBarSection(),
            this.renderBarSection(),
            this.renderBarSection(),
            this.renderBarSection(),
            this.renderBarSection()
        ];
    };
    class_1.prototype.renderBarSection = function () {
        var barPercentage = Math.trunc(Math.random() * 60) + 40;
        return (h("div", { class: 'placeholder-list__items' }, h("as-placeholder-bar", { class: 'placeholder-list__item placeholder-list__item--first', height: '12px', width: barPercentage + "%" }), h("as-placeholder-bar", { class: 'placeholder-list__item', height: '4px', width: '100%' })));
    };
    Object.defineProperty(class_1, "style", {
        get: function () { return ".placeholder-list__items:not(:last-child){margin-bottom:12px}.placeholder-list__item{display:block}.placeholder-list__item.placeholder-list__item--first{margin-bottom:8px}"; },
        enumerable: true,
        configurable: true
    });
    return class_1;
}());
export { LoadingBar as as_placeholder_list };
