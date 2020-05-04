import { h } from "@stencil/core";
import { event as d3event } from 'd3-selection';
import contentFragment from '../common/content.fragment';
import colorMapFactory from './utils/colorMap.factory';
import dataService from './utils/data.service';
import drawService from './utils/draw.service';
const BAR_WIDTH_THRESHOLD = 3;
/**
 * Stacked bar Widget
 *
 * @export
 * @class StackedBarWidget
 */
export class StackedBarWidget {
    constructor() {
        /**
         * Boolean flag to control legend visibility.
         * Defaults: true
         *
         * @type {boolean}
         * @memberof StackedBarWidget
         */
        this.showLegend = true;
        /**
         * The data that will be drawn.
         *
         * @type {RawStackedbarData}
         * @memberof StackedBarWidget
         */
        this.data = [];
        /**
         * Use this attribute to put the widget in "loading mode".
         * When this attribute is true, the widget won't show any data, a spinner will be placed instead.
         */
        this.isLoading = false;
        /**
         * Use this attribute to put the widget in "error mode".
         * When this attribute is given, its text will be shown in the subheader and the widget content won't be displayed.
         */
        this.error = '';
        /**
         * Extended error description, only shown when error is present
         */
        this.errorDescription = '';
        /**
         * Message shown in header when no data is available
         */
        this.noDataHeaderMessage = 'NO DATA AVAILABLE';
        /**
         * Message shown in body when no data is available
         */
        this.noDataBodyMessage = 'There is no data to display.';
        /**
         * Use this attribute to decide if the widget should be rerendered on window resize.
         * Defaults to true.
         */
        this.responsive = true;
        /**
         * Chart scale, will be displayed by the yAxis
         */
        this.scale = [0, 0];
        /**
         * Callback executed when the mouse is placed over a rectangle.
         */
        this.mouseOver = (data) => {
            const event = d3event;
            this.tooltip.style.display = 'inline';
            this.tooltip.style.left = `${event.clientX}px`;
            this.tooltip.style.top = `${event.clientY}px`;
            this.tooltip.innerText = `${this.formatFn(data.v)}`;
        };
        /**
         * Callback executed when the mouse is placed outside a rectangle.
         */
        this.mouseLeave = () => {
            this.tooltip.style.display = 'none';
        };
        /**
         * Easy customize tooltip format
         */
        this.formatFn = (value) => {
            return value;
        };
        // Bind here so we can remove the event listener properly
        this._resizeListener = this._resizeListener.bind(this);
    }
    render() {
        return [
            h("as-widget-header", { header: this.heading, subheader: this.description, "is-loading": this.isLoading, "is-empty": this._isEmpty(), error: this.error, "no-data-message": this.noDataHeaderMessage }),
            this._renderContent()
        ];
    }
    componentDidLoad() {
        this._drawFigure();
    }
    componentDidUpdate() {
        this._drawFigure();
    }
    componentWillLoad() {
        this._setupState();
        addEventListener('resize', this._resizeListener);
    }
    componentWillUpdate() {
        this._setupState();
    }
    componentDidUnload() {
        removeEventListener('resize', this._resizeListener);
    }
    _onDataChanged() {
        this._setupState();
        this._drawFigure();
    }
    _setupState() {
        this.scale = dataService.getDomain(this.data);
        this.colorMap = this._createColorMap(this.data, this.metadata);
    }
    _renderContent() {
        return contentFragment(this.isLoading, this.error, this._isEmpty(), this.heading, this.errorDescription, this.noDataBodyMessage, [
            h("svg", { class: 'figure', ref: (ref) => this.container = ref }),
            this._renderLegend(),
            h("span", { ref: (ref) => this.tooltip = ref, role: 'tooltip', class: 'as-tooltip as-tooltip--top' }, " TOOLTIP")
        ]);
    }
    _drawFigure() {
        if (!this._isContainerReady()) {
            return;
        }
        requestAnimationFrame(() => {
            const yAxis = this._drawYAxis();
            this._drawColumns(yAxis);
        });
    }
    _drawColumns(yAxisElement) {
        if (this.isLoading || this.error || this._isEmpty()) {
            return;
        }
        const Y_AXIS_LABEL_WIDTH = 25; // We draw on the right of the yAxis labels
        let columnMargin = 4;
        let WIDTH = yAxisElement.getBoundingClientRect().width - Y_AXIS_LABEL_WIDTH - columnMargin;
        let COLUMN_WIDTH = (WIDTH / this.data.length) - columnMargin;
        if (COLUMN_WIDTH < BAR_WIDTH_THRESHOLD) {
            WIDTH += columnMargin;
            COLUMN_WIDTH += columnMargin;
            columnMargin = 0;
        }
        const data = dataService.rawDataToStackBarData(this.data, this.scale, this.colorMap, COLUMN_WIDTH, columnMargin);
        drawService.drawColumns(this.container, data, this.mouseOver, this.mouseLeave);
    }
    _drawYAxis() {
        return drawService.drawYAxis(this.container, this.scale);
    }
    _renderLegend() {
        if (this.showLegend && this.colorMap) {
            const legendData = dataService.createLegendData(this.metadata, this.colorMap);
            return h("as-widget-legend", { data: legendData });
        }
    }
    _createColorMap(data, metadata) {
        const keys = dataService.getKeys(data);
        return colorMapFactory.create(keys, metadata);
    }
    _isEmpty() {
        return !this.data || !this.data.length;
    }
    _resizeListener() {
        if (this.responsive) {
            this.el.forceUpdate();
        }
    }
    // If container is not ready or the widget is invisible block drawing phase
    _isContainerReady() {
        if (!this.container || this.el.clientWidth === 0 || this.el.clientHeight === 0) {
            return false;
        }
        return true;
    }
    static get is() { return "as-stacked-bar-widget"; }
    static get originalStyleUrls() { return {
        "$": ["./as-stacked-bar-widget.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["as-stacked-bar-widget.css"]
    }; }
    static get properties() { return {
        "heading": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [{
                        "text": "{string}",
                        "name": "type"
                    }, {
                        "text": "StackedBarWidget",
                        "name": "memberof"
                    }],
                "text": "Header of the widget to be displayed"
            },
            "attribute": "heading",
            "reflect": false
        },
        "description": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [{
                        "text": "{string}",
                        "name": "type"
                    }, {
                        "text": "StackedBarWidget",
                        "name": "memberof"
                    }],
                "text": "Description of the widget to be displayed"
            },
            "attribute": "description",
            "reflect": false
        },
        "showLegend": {
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
                "tags": [{
                        "text": "{boolean}",
                        "name": "type"
                    }, {
                        "text": "StackedBarWidget",
                        "name": "memberof"
                    }],
                "text": "Boolean flag to control legend visibility.\nDefaults: true"
            },
            "attribute": "show-legend",
            "reflect": false,
            "defaultValue": "true"
        },
        "data": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "RawStackedbarData[]",
                "resolved": "RawStackedbarData[]",
                "references": {
                    "RawStackedbarData": {
                        "location": "import",
                        "path": "./types/RawStackedbarData"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [{
                        "text": "{RawStackedbarData}",
                        "name": "type"
                    }, {
                        "text": "StackedBarWidget",
                        "name": "memberof"
                    }],
                "text": "The data that will be drawn."
            },
            "defaultValue": "[]"
        },
        "metadata": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "Metadata",
                "resolved": "Metadata",
                "references": {
                    "Metadata": {
                        "location": "import",
                        "path": "./types/Metadata"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Legend data"
            }
        },
        "isLoading": {
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
                "text": "Use this attribute to put the widget in \"loading mode\".\nWhen this attribute is true, the widget won't show any data, a spinner will be placed instead."
            },
            "attribute": "is-loading",
            "reflect": false,
            "defaultValue": "false"
        },
        "error": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Use this attribute to put the widget in \"error mode\".\nWhen this attribute is given, its text will be shown in the subheader and the widget content won't be displayed."
            },
            "attribute": "error",
            "reflect": false,
            "defaultValue": "''"
        },
        "errorDescription": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Extended error description, only shown when error is present"
            },
            "attribute": "error-description",
            "reflect": false,
            "defaultValue": "''"
        },
        "noDataHeaderMessage": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Message shown in header when no data is available"
            },
            "attribute": "no-data-header-message",
            "reflect": false,
            "defaultValue": "'NO DATA AVAILABLE'"
        },
        "noDataBodyMessage": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Message shown in body when no data is available"
            },
            "attribute": "no-data-body-message",
            "reflect": false,
            "defaultValue": "'There is no data to display.'"
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
                "text": "Use this attribute to decide if the widget should be rerendered on window resize.\nDefaults to true."
            },
            "attribute": "responsive",
            "reflect": false,
            "defaultValue": "true"
        },
        "mouseOver": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "(data: RectangleData) => void",
                "resolved": "(data: RectangleData) => void",
                "references": {
                    "RectangleData": {
                        "location": "import",
                        "path": "./types/RectangleData"
                    },
                    "MouseEvent": {
                        "location": "global"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Callback executed when the mouse is placed over a rectangle."
            },
            "defaultValue": "(data: RectangleData) => {\n    const event = d3event as MouseEvent;\n    this.tooltip.style.display = 'inline';\n    this.tooltip.style.left = `${event.clientX}px`;\n    this.tooltip.style.top = `${event.clientY}px`;\n    this.tooltip.innerText = `${this.formatFn(data.v)}`;\n  }"
        },
        "mouseLeave": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "() => void",
                "resolved": "() => void",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Callback executed when the mouse is placed outside a rectangle."
            },
            "defaultValue": "() => {\n    this.tooltip.style.display = 'none';\n  }"
        },
        "formatFn": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "(value: any) => any",
                "resolved": "(value: any) => any",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Easy customize tooltip format"
            },
            "defaultValue": "(value) => {\n    return value;\n  }"
        }
    }; }
    static get elementRef() { return "el"; }
    static get watchers() { return [{
            "propName": "data",
            "methodName": "_onDataChanged"
        }]; }
}
