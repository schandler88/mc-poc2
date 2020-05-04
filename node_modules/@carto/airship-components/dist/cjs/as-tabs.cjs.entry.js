'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-894cddb9.js');
const redrawChildren = require('./redraw-children-e47ac0ef.js');

const Tabs = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
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
            core.h("slot", null)
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
                redrawChildren.redrawChildren(element);
            }
        });
    }
    _renderTabs(children) {
        const tabListClasses = {
            'as-tabs': true,
            'as-tabs--xl': this.xl,
        };
        return core.h("div", { role: 'tablist', class: tabListClasses }, children.map(this._renderTab.bind(this)));
    }
    _renderTab(childrenElement, index) {
        const elementClasses = {
            'as-tabs__item': true,
            'as-tabs__item--active': index === this.activeTab
        };
        const title = this._getTitle(childrenElement, index);
        return core.h("button", { role: 'tab', class: elementClasses, onClick: () => { this.activeTab = index; } }, " ", title, " ");
    }
    _getTitle(element, index) {
        if (element.getAttribute('data-title')) {
            return element.getAttribute('data-title');
        }
        return `Tab ${index}`;
    }
    get element() { return core.getElement(this); }
    static get style() { return ".as-tabs{--as--tabs--background-color:var(--as--color--ui-01,#fff);--as--tabs--border-color:var(--as--color--ui-03,#e2e6e3);--as--tabs--item--font:var(--as--font--body);--as--tabs--item--color:var(--as--color--primary,#1785fb);--as--tabs--item--color-hover:var(--as--color--type-01,#2c2c2c);--as--tabs--item--color-active:var(--as--color--primary,#1785fb);--as--tabs--item--border-color-hover:var(--as--color--complementary,#47db99);--as--tabs--item--border-color-active:var(--as--color--primary,#1785fb);--as--tabs--item--border-color-hover-active:var(--as--color--primary,#1785fb);--as--tabs--subheader--font:var(--as--font--subheader);--as--tabs--horizontal-padding:12px;display:-ms-flexbox;display:flex;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-ms-flex-pack:start;justify-content:flex-start;margin:0;padding:0 var(--as--tabs--horizontal-padding);overflow-x:auto;-webkit-overflow-scrolling:touch;-ms-overflow-style:-ms-autohiding-scrollbar;background:var(--as--tabs--background-color);-webkit-box-shadow:inset 0 -1px 0 0 var(--as--tabs--border-color);box-shadow:inset 0 -1px 0 0 var(--as--tabs--border-color);list-style:none}.as-tabs::-webkit-scrollbar,.as-tabs::-webkit-scrollbar-thumb{display:none}.as-tabs__item{padding:8px 12px;display:inline-block;-ms-flex:0 0 auto;flex:0 0 auto;margin:0;-webkit-transition:border .2s;transition:border .2s;border:none;border-bottom:2px solid transparent;outline:none;background:none;color:var(--as--tabs--item--color);font:var(--as--tabs--item--font);text-decoration:none;cursor:pointer}.as-tabs__item:hover{border-bottom:2px solid var(--as--tabs--item--border-color-hover)}.as-tabs__item--active{border-bottom:2px solid var(--as--tabs--item--border-color-active);color:var(--as--tabs--item--color-active)}.as-tabs__item--active:hover{border-bottom:2px solid var(--as--tabs--item--border-color-hover-active)}.as-tabs__item a{color:inherit;text-decoration:none}.as-tabs--xl .as-tabs__item{border-bottom:4px solid transparent;font:var(--as--tabs--subheader--font)}.as-tabs--xl .as-tabs__item:focus,.as-tabs--xl .as-tabs__item:hover{border-bottom:4px solid var(--as--tabs--item--border-color-hover)}.as-tabs--xl .as-tabs__item--active,.as-tabs--xl .as-tabs__item:active{border-bottom:4px solid var(--as--tabs--item--border-color-active);color:var(--as--tabs--item--color-active)}as-tabs{display:block}"; }
};

exports.as_tabs = Tabs;
