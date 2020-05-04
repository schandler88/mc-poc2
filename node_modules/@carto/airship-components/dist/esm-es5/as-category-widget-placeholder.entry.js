import { r as registerInstance, h } from './core-a69618da.js';
var CategoryWidgetPlaceholder = /** @class */ (function () {
    function class_1(hostRef) {
        registerInstance(this, hostRef);
    }
    class_1.prototype.render = function () {
        return [
            h("as-placeholder", null, h("div", { slot: 'header' }, h("slot", null)), h("as-placeholder-bar", { width: '30%', height: '12px' }), h("as-placeholder-list", null))
        ];
    };
    Object.defineProperty(class_1, "style", {
        get: function () { return "as-category-widget-placeholder{background-color:var(--as--color--ui-01,$color-ui-01)}as-placeholder-bar{margin-bottom:12px}"; },
        enumerable: true,
        configurable: true
    });
    return class_1;
}());
export { CategoryWidgetPlaceholder as as_category_widget_placeholder };
