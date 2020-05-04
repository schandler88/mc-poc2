import { h } from "@stencil/core";
export class CategoryWidgetPlaceholder {
    render() {
        return (h("as-placeholder", null,
            h("div", { slot: 'header' },
                h("slot", null)),
            h("as-placeholder-chart", null)));
    }
    static get is() { return "as-histogram-widget-placeholder"; }
    static get styles() { return "as-histogram-widget-placeholder {\n      background-color: var(--as--color--ui-01, $color-ui-01);\n    }"; }
}
