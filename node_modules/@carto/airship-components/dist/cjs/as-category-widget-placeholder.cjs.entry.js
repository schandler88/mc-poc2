'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-894cddb9.js');

const CategoryWidgetPlaceholder = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
    }
    render() {
        return [
            core.h("as-placeholder", null, core.h("div", { slot: 'header' }, core.h("slot", null)), core.h("as-placeholder-bar", { width: '30%', height: '12px' }), core.h("as-placeholder-list", null))
        ];
    }
    static get style() { return "as-category-widget-placeholder{background-color:var(--as--color--ui-01,$color-ui-01)}as-placeholder-bar{margin-bottom:12px}"; }
};

exports.as_category_widget_placeholder = CategoryWidgetPlaceholder;
