var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { r as registerInstance, c as createEvent, h, g as getElement } from './core-a69618da.js';
import { r as redrawChildren } from './redraw-children-f8ca3ca0.js';
var ApplicationSection = /** @class */ (function () {
    function ApplicationSection(_a) {
        var activeClass = _a.activeClass, element = _a.element, name = _a.name, order = _a.order, type = _a.type;
        this._active = false;
        this._activeClass = activeClass;
        this._element = element;
        this._name = name;
        this._order = order;
        this._type = type;
    }
    Object.defineProperty(ApplicationSection.prototype, "active", {
        get: function () {
            return this._active;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApplicationSection.prototype, "activeClass", {
        get: function () {
            return this._activeClass;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApplicationSection.prototype, "element", {
        get: function () {
            return this._element;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApplicationSection.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApplicationSection.prototype, "order", {
        get: function () {
            return this._order;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApplicationSection.prototype, "type", {
        get: function () {
            return this._type;
        },
        enumerable: true,
        configurable: true
    });
    ApplicationSection.prototype.enable = function () {
        this.element.classList.add(this._activeClass);
        this._active = true;
    };
    ApplicationSection.prototype.disable = function () {
        this.element.classList.remove(this._activeClass);
        this._active = false;
    };
    return ApplicationSection;
}());
function getMap(element) {
    var mapElement = element.querySelector('.as-map-area');
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
        name: sidebarElement.getAttribute('data-name') || "Sidebar " + index,
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
        name: panelElement.getAttribute('data-name') || "Panel " + index,
        order: panelElement.getAttribute('data-tab-order') || 0,
        type: 'panels'
    });
}
function getFooter(element) {
    var footerElement = element.querySelector('.as-map-footer');
    return footerElement
        ? new ApplicationSection({
            activeClass: 'as-map-footer--visible',
            element: footerElement,
            name: footerElement.getAttribute('data-name') || "Bottom Bar",
            order: footerElement.getAttribute('data-tab-order') || 0,
            type: 'mapFooter'
        })
        : null;
}
var contentService = {
    getFooter: getFooter,
    getMap: getMap,
    getPanels: getPanels,
    getSidebars: getSidebars,
};
var ResponsiveContent = /** @class */ (function () {
    function class_1(hostRef) {
        registerInstance(this, hostRef);
        this.sections = [];
        this.ready = createEvent(this, "ready", 7);
        this.sectionChange = createEvent(this, "sectionChange", 7);
    }
    class_1.prototype.componentWillLoad = function () {
        this.sections = this.getContentSections();
    };
    class_1.prototype.componentDidLoad = function () {
        this.ready.emit();
    };
    class_1.prototype.getSections = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.sections];
            });
        });
    };
    class_1.prototype.setVisible = function (sectionName) {
        return __awaiter(this, void 0, void 0, function () {
            var sectionFound;
            return __generator(this, function (_a) {
                sectionFound = this.sections.find(function (section) { return section.name === sectionName; });
                if (sectionFound) {
                    this.setActive(sectionFound);
                }
                return [2 /*return*/];
            });
        });
    };
    class_1.prototype.render = function () {
        return [
            this._renderTabs(),
            this._renderContent()
        ];
    };
    class_1.prototype._renderTabs = function () {
        var _this = this;
        var tabs = this.sections.map(function (section, index) {
            if (!section.element) {
                return;
            }
            var cssClasses = {
                'as-tabs__item': true,
                'as-tabs__item--active': section.active
            };
            return (h("button", { onClick: function () { return _this.setActive(section); }, role: 'tab', class: cssClasses }, section.name || index));
        });
        return (h("div", { role: 'tablist', class: 'as-toolbar-tabs as-tabs as-tabs--xl' }, tabs));
    };
    class_1.prototype._renderContent = function () {
        return (h("section", { class: 'as-content' }, h("slot", null)));
    };
    class_1.prototype.setActive = function (section, redraw) {
        if (redraw === void 0) { redraw = true; }
        if (section.active) {
            return;
        }
        this.disableActiveSection();
        section.enable();
        if (redraw) {
            redrawChildren(section.element);
        }
        this.activeSection = section;
        this.sections = this.sections.slice();
        this.sectionChange.emit(section);
    };
    class_1.prototype.disableActiveSection = function () {
        if (!this.activeSection) {
            return;
        }
        this.activeSection.disable();
    };
    class_1.prototype.getContentSections = function () {
        var sections = [
            contentService.getMap(this.element)
        ].concat(contentService.getSidebars(this.element), contentService.getPanels(this.element), [
            contentService.getFooter(this.element)
        ]).filter(function (section) {
            return section !== null;
        });
        if (sections.length) {
            sections.sort(function (a, b) { return a.order - b.order; });
            this.setActive(sections[0], false);
        }
        return sections;
    };
    Object.defineProperty(class_1.prototype, "element", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_1, "style", {
        get: function () { return "as-responsive-content{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;min-height:0}"; },
        enumerable: true,
        configurable: true
    });
    return class_1;
}());
export { ResponsiveContent as as_responsive_content };
