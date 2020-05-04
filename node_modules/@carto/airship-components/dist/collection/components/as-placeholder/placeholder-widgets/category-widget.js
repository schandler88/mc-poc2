import { h } from "@stencil/core";
export class CategoryWidgetPlaceholder {
    render() {
        return [
            h("as-placeholder", null,
                h("div", { slot: 'header' },
                    h("slot", null)),
                h("as-placeholder-bar", { width: '30%', height: '12px' }),
                h("as-placeholder-list", null))
        ];
    }
    static get is() { return "as-category-widget-placeholder"; }
    static get styles() { return "as-category-widget-placeholder {\n      background-color: var(--as--color--ui-01, $color-ui-01);\n    }\n\n    as-placeholder-bar {\n      margin-bottom: 12px;\n    }"; }
}
