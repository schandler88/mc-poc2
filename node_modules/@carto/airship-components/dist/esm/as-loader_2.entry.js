import { r as registerInstance, h } from './core-a69618da.js';

const Loader = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return h("span", { class: 'as-loading' }, h("svg", { viewBox: '0 0 50 50' }, h("circle", { cx: '25', cy: '25', r: '20', fill: 'none' })));
    }
    static get style() { return "as-loader{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}"; }
};

const WidgetHeader = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * Main title
         *
         * @type {string}
         * @memberof WidgetHeader
         */
        this.header = '';
        /**
         * Secondary title
         *
         * @type {string}
         * @memberof WidgetHeader
         */
        this.subheader = '';
        /**
         * Use this attribute to put the widget-header in "error mode".
         * When this attribute is not empty the subheader will display the given value.
         */
        this.error = '';
        /**
         * Use this attribute to put the widget-header in "empty mode".
         * When this attribute is true the subheader will show the text defined by noDataMessage.
         */
        this.isEmpty = false;
        /**
         * Use this attribute to put the widget-header in "loading mode".
         * When this attribute is true the subheader text will be displayed as usual.
         */
        this.isLoading = false;
        /**
         * Use this attribute to select the text displayed in the subheader when the header is in "empty mode".
         * Defaults to "NO DATA AVAILABLE"
         */
        this.noDataMessage = 'NO DATA AVAILABLE';
    }
    render() {
        return [
            h("h2", { class: 'as-widget-header__header' }, this.header),
            this._getSubHeader(),
        ];
    }
    _getSubHeader() {
        if (this.isLoading) {
            return h("p", { class: 'as-widget-header__subheader as-body' }, this.subheader);
        }
        if (this.error) {
            return h("p", { class: 'as-widget-header__subheader as-widget-header__subheader--error as-body' }, this.error);
        }
        if (this.isEmpty) {
            return h("p", { class: 'as-widget-header__subheader as-widget-header__subheader--empty as-body' }, this.noDataMessage);
        }
        return h("p", { class: 'as-widget-header__subheader as-body' }, this.subheader);
    }
    static get style() { return "as-widget-header{--as--widget-header__header--color:var(--as--color--type-01);--as--widget-subheader--color:var(--as--color--type-02);--as--widget-header__subheader--color-error:var(--as--color--error);--as--widget-header__subheader--color-empty:var(--as--color--warning);display:block}as-widget-header .as-widget-header__header{margin:0;color:var(--as--widget-header__header--color);font:var(--as--font--subheader)}as-widget-header .as-widget-header__subheader{color:var(--as--widget-subheader--color,#f4f4f4)}as-widget-header .as-widget-header__subheader--error{color:var(--widget--subheader-color-error,#f3522b);text-transform:uppercase}as-widget-header .as-widget-header__subheader--empty{color:var(--widget--subheader-color-empty,#fdb32b);text-transform:uppercase}"; }
};

export { Loader as as_loader, WidgetHeader as as_widget_header };
