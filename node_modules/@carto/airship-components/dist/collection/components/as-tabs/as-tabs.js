import { h } from "@stencil/core";
import { redrawChildren } from '../../utils/redraw-children';
/**
 * As Tabs
 *
 * @export
 * @class Tabs
 */
export class Tabs {
    constructor() {
        /**
         * Index of the active tab. Defaults to 0
         */
        this.activeTab = 0;
        /**
         * Make the tabs XL
         */
        this.xl = false;
    }
    render() {
        const children = this._parseChildren();
        return [
            this._renderTabs(children),
            h("slot", null)
        ];
    }
    componentDidLoad() {
        const children = this._parseChildren();
        this._updateActiveTab(children);
    }
    componentDidUpdate() {
        const children = this._parseChildren();
        this._updateActiveTab(children);
    }
    _parseChildren() {
        return Array.from(this.element.querySelectorAll('[role="tabpanel"]'));
    }
    _updateActiveTab(children) {
        if (!children) {
            // tslint:disable-next-line
            console.warn('Airship Tabs: Children elements must have role="tabpanel" attribute.');
            return;
        }
        children.forEach((element, i) => {
            const visible = this.activeTab === i;
            visible ? element.removeAttribute('hidden') : element.setAttribute('hidden', 'hidden');
            if (visible) {
                redrawChildren(element);
            }
        });
    }
    _renderTabs(children) {
        const tabListClasses = {
            'as-tabs': true,
            'as-tabs--xl': this.xl,
        };
        return h("div", { role: 'tablist', class: tabListClasses }, children.map(this._renderTab.bind(this)));
    }
    _renderTab(childrenElement, index) {
        const elementClasses = {
            'as-tabs__item': true,
            'as-tabs__item--active': index === this.activeTab
        };
        const title = this._getTitle(childrenElement, index);
        return h("button", { role: 'tab', class: elementClasses, onClick: () => { this.activeTab = index; } },
            " ",
            title,
            " ");
    }
    _getTitle(element, index) {
        if (element.getAttribute('data-title')) {
            return element.getAttribute('data-title');
        }
        return `Tab ${index}`;
    }
    static get is() { return "as-tabs"; }
    static get originalStyleUrls() { return {
        "$": ["./as-tabs.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["as-tabs.css"]
    }; }
    static get properties() { return {
        "activeTab": {
            "type": "number",
            "mutable": true,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Index of the active tab. Defaults to 0"
            },
            "attribute": "active-tab",
            "reflect": false,
            "defaultValue": "0"
        },
        "xl": {
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
                "text": "Make the tabs XL"
            },
            "attribute": "xl",
            "reflect": false,
            "defaultValue": "false"
        }
    }; }
    static get elementRef() { return "element"; }
}
