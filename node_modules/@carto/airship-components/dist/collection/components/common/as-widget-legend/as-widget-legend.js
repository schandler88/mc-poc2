import { h } from "@stencil/core";
/**
 * Helper class to draw the vertical axis on some widgets.
 *
 * @export
 * @class Legend
 */
export class WidgetLegend {
    render() {
        return Object.keys(this.data).map((key) => {
            return h("div", { class: 'widget-legend-item' },
                h("span", { class: 'widget-legend-item__box', style: { background: this.data[key] } }),
                h("span", { class: 'widget-legend-item__label as-body' }, key));
        });
    }
    static get is() { return "as-widget-legend"; }
    static get originalStyleUrls() { return {
        "$": ["./as-widget-legend.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["as-widget-legend.css"]
    }; }
    static get properties() { return {
        "data": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "WidgetLegendData",
                "resolved": "WidgetLegendData",
                "references": {
                    "WidgetLegendData": {
                        "location": "import",
                        "path": "./types/WidgetLegendData"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [{
                        "text": "{WidgetLegendData}",
                        "name": "type"
                    }, {
                        "text": "WidgetLegend",
                        "name": "memberof"
                    }],
                "text": "Data to be displayed by the legend"
            }
        }
    }; }
}
