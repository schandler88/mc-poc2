import yAxisService from './y-axis.service';
/**
 * Helper class to draw the vertical axis on some widgets.
 * WARNING: This component should be placed next to the SVG element.
 *
 * @export
 * @class YAxis
 */
export class YAxis {
    constructor() {
        /**
         * Lower limit of the axis
         *
         * @type {number}
         * @memberof YAxis
         */
        this.from = 0;
        /**
         * Upper limit of the axis
         *
         * @type {Number[]}
         * @memberof YAxis
         */
        this.to = 0;
        /**
         * Use this attribute to decide if the widget should be rerendered on window resize
         * Defaults to true
         */
        this.responsive = true;
        this._resizeListener = this._resizeListener.bind(this);
    }
    componentWillLoad() {
        addEventListener('resize', this._resizeListener);
    }
    componentDidUnload() {
        removeEventListener('resize', this._resizeListener);
    }
    render() {
        const element = this.element.previousElementSibling;
        const scale = [this.from, this.to];
        yAxisService.renderYAxis(element, scale);
    }
    _resizeListener() {
        if (this.responsive) {
            this.element.forceUpdate();
        }
    }
    static get is() { return "as-y-axis"; }
    static get originalStyleUrls() { return {
        "$": ["./as-y-axis.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["as-y-axis.css"]
    }; }
    static get properties() { return {
        "from": {
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
                "tags": [{
                        "text": "{number}",
                        "name": "type"
                    }, {
                        "text": "YAxis",
                        "name": "memberof"
                    }],
                "text": "Lower limit of the axis"
            },
            "attribute": "from",
            "reflect": false,
            "defaultValue": "0"
        },
        "to": {
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
                "tags": [{
                        "text": "{Number[]}",
                        "name": "type"
                    }, {
                        "text": "YAxis",
                        "name": "memberof"
                    }],
                "text": "Upper limit of the axis"
            },
            "attribute": "to",
            "reflect": false,
            "defaultValue": "0"
        },
        "responsive": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Use this attribute to decide if the widget should be rerendered on window resize\nDefaults to true"
            },
            "attribute": "responsive",
            "reflect": false,
            "defaultValue": "true"
        }
    }; }
    static get elementRef() { return "element"; }
}
