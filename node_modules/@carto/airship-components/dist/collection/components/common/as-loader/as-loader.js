import { h } from "@stencil/core";
/**
 * Helper class to draw the vertical axis on some widgets.
 *
 * @export
 * @class Legend
 */
export class Loader {
    render() {
        return h("span", { class: 'as-loading' },
            h("svg", { viewBox: '0 0 50 50' },
                h("circle", { cx: '25', cy: '25', r: '20', fill: 'none' })));
    }
    static get is() { return "as-loader"; }
    static get originalStyleUrls() { return {
        "$": ["./as-loader.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["as-loader.css"]
    }; }
}
