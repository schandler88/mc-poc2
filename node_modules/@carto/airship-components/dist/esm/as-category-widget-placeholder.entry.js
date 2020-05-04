import { r as registerInstance, h } from './core-a69618da.js';

const CategoryWidgetPlaceholder = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return [
            h("as-placeholder", null, h("div", { slot: 'header' }, h("slot", null)), h("as-placeholder-bar", { width: '30%', height: '12px' }), h("as-placeholder-list", null))
        ];
    }
    static get style() { return "as-category-widget-placeholder{background-color:var(--as--color--ui-01,$color-ui-01)}as-placeholder-bar{margin-bottom:12px}"; }
};

export { CategoryWidgetPlaceholder as as_category_widget_placeholder };
