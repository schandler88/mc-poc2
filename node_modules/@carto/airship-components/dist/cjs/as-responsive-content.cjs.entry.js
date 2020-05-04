'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-894cddb9.js');
const redrawChildren = require('./redraw-children-e47ac0ef.js');

class ApplicationSection {
    constructor({ activeClass, element, name, order, type }) {
        this._active = false;
        this._activeClass = activeClass;
        this._element = element;
        this._name = name;
        this._order = order;
        this._type = type;
    }
    get active() {
        return this._active;
    }
    get activeClass() {
        return this._activeClass;
    }
    get element() {
        return this._element;
    }
    get name() {
        return this._name;
    }
    get order() {
        return this._order;
    }
    get type() {
        return this._type;
    }
    enable() {
        this.element.classList.add(this._activeClass);
        this._active = true;
    }
    disable() {
        this.element.classList.remove(this._activeClass);
        this._active = false;
    }
}

function getMap(element) {
    const mapElement = element.querySelector('.as-map-area');
    return mapElement
        ? new ApplicationSection({
            activeClass: 'as-map-area--visible',
            element: mapElement,
            name: mapElement.getAttribute('data-name') || 'Map',
            order: mapElement.getAttribute('data-tab-order') || 0,
            type: 'map'
        })
        : null;
}
function getSidebars(element) {
    return Array.from(element.querySelectorAll('.as-sidebar')).map(_getSidebar);
}
function _getSidebar(sidebarElement, index) {
    return new ApplicationSection({
        activeClass: 'as-sidebar--visible',
        element: sidebarElement,
        name: sidebarElement.getAttribute('data-name') || `Sidebar ${index}`,
        order: sidebarElement.getAttribute('data-tab-order') || 0,
        type: 'sidebar'
    });
}
function getPanels(element) {
    return Array.from(element.querySelectorAll('.as-map-panels')).map(_getPanel);
}
function _getPanel(panelElement, index) {
    return new ApplicationSection({
        activeClass: 'as-map-panels--visible',
        element: panelElement,
        name: panelElement.getAttribute('data-name') || `Panel ${index}`,
        order: panelElement.getAttribute('data-tab-order') || 0,
        type: 'panels'
    });
}
function getFooter(element) {
    const footerElement = element.querySelector('.as-map-footer');
    return footerElement
        ? new ApplicationSection({
            activeClass: 'as-map-footer--visible',
            element: footerElement,
            name: footerElement.getAttribute('data-name') || `Bottom Bar`,
            order: footerElement.getAttribute('data-tab-order') || 0,
            type: 'mapFooter'
        })
        : null;
}
const contentService = {
    getFooter,
    getMap,
    getPanels,
    getSidebars,
};

const ResponsiveContent = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
        this.sections = [];
        this.ready = core.createEvent(this, "ready", 7);
        this.sectionChange = core.createEvent(this, "sectionChange", 7);
    }
    componentWillLoad() {
        this.sections = this.getContentSections();
    }
    componentDidLoad() {
        this.ready.emit();
    }
    async getSections() {
        return this.sections;
    }
    async setVisible(sectionName) {
        const sectionFound = this.sections.find((section) => section.name === sectionName);
        if (sectionFound) {
            this.setActive(sectionFound);
        }
    }
    render() {
        return [
            this._renderTabs(),
            this._renderContent()
        ];
    }
    _renderTabs() {
        const tabs = this.sections.map((section, index) => {
            if (!section.element) {
                return;
            }
            const cssClasses = {
                'as-tabs__item': true,
                'as-tabs__item--active': section.active
            };
            return (core.h("button", { onClick: () => this.setActive(section), role: 'tab', class: cssClasses }, section.name || index));
        });
        return (core.h("div", { role: 'tablist', class: 'as-toolbar-tabs as-tabs as-tabs--xl' }, tabs));
    }
    _renderContent() {
        return (core.h("section", { class: 'as-content' }, core.h("slot", null)));
    }
    setActive(section, redraw = true) {
        if (section.active) {
            return;
        }
        this.disableActiveSection();
        section.enable();
        if (redraw) {
            redrawChildren.redrawChildren(section.element);
        }
        this.activeSection = section;
        this.sections = [...this.sections];
        this.sectionChange.emit(section);
    }
    disableActiveSection() {
        if (!this.activeSection) {
            return;
        }
        this.activeSection.disable();
    }
    getContentSections() {
        const sections = [
            contentService.getMap(this.element),
            ...contentService.getSidebars(this.element),
            ...contentService.getPanels(this.element),
            contentService.getFooter(this.element)
        ].filter((section) => {
            return section !== null;
        });
        if (sections.length) {
            sections.sort((a, b) => a.order - b.order);
            this.setActive(sections[0], false);
        }
        return sections;
    }
    get element() { return core.getElement(this); }
    static get style() { return "as-responsive-content{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;min-height:0}"; }
};

exports.as_responsive_content = ResponsiveContent;
