import { h } from "@stencil/core";
export class Placeholder {
    render() {
        return (h("section", { class: 'placeholder' },
            h("div", { class: 'progress' },
                h("div", { class: 'progress__animation' })),
            h("div", { class: 'placeholder__title' },
                h("slot", { name: 'header' }, "Loading data...")),
            h("div", { class: 'placeholder__content' },
                h("slot", null))));
    }
    static get is() { return "as-placeholder"; }
    static get originalStyleUrls() { return {
        "$": ["./as-placeholder.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["as-placeholder.css"]
    }; }
}
