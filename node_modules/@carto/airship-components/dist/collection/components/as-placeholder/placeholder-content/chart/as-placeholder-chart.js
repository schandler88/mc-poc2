import { h } from "@stencil/core";
export class PlaceholderChart {
    constructor() {
        this.barWidth = 10;
    }
    onWindowResize() {
        window.clearTimeout(this.resizeTimerId);
        this.resizeTimerId = setTimeout(() => { this.setElementWidth(); }, 250);
    }
    componentDidLoad() {
        this.setElementWidth();
    }
    render() {
        const numberOfBars = calculateBarsQuantity(this.elementWidth, this.barWidth);
        const placeholderBars = this.renderBars(numberOfBars);
        return [
            h("section", { class: 'placeholder__vaxis' },
                h("div", { class: 'vaxis-item vaxis-item--y' }),
                h("div", { class: 'vaxis-item vaxis-item--y' }),
                h("div", { class: 'vaxis-item vaxis-item--y' }),
                h("div", { class: 'vaxis-item vaxis-item--x' })),
            h("section", { class: 'placeholder-chart' }, placeholderBars)
        ];
    }
    renderBars(numberOfBars) {
        const bars = [];
        for (let i = 0; i < numberOfBars; i++) {
            const barPercentage = Math.trunc(Math.random() * 85) + 15;
            bars.push(h("as-placeholder-bar", { class: 'placeholder-chart__bar', height: `${barPercentage}%`, width: `${this.barWidth}px` }));
        }
        return bars;
    }
    setElementWidth() {
        const boundingRect = this.element.getBoundingClientRect();
        this.elementWidth = boundingRect.width;
    }
    static get is() { return "as-placeholder-chart"; }
    static get originalStyleUrls() { return {
        "$": ["./as-placeholder-chart.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["as-placeholder-chart.css"]
    }; }
    static get properties() { return {
        "barWidth": {
            "type": "number",
            "mutable": false,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "bar-width",
            "reflect": false,
            "defaultValue": "10"
        }
    }; }
    static get states() { return {
        "elementWidth": {}
    }; }
    static get elementRef() { return "element"; }
    static get listeners() { return [{
            "name": "resize",
            "method": "onWindowResize",
            "target": "window",
            "capture": false,
            "passive": true
        }]; }
}
function calculateBarsQuantity(elementWidth, barWidth) {
    if (!elementWidth) {
        return 1;
    }
    return Math.floor(elementWidth / barWidth);
}
