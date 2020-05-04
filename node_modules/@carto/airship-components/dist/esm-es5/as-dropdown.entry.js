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
import { r as registerInstance, c as createEvent, h } from './core-a69618da.js';
var Dropdown = /** @class */ (function () {
    function class_1(hostRef) {
        var _this = this;
        registerInstance(this, hostRef);
        /**
         * Array of options to display in the dropdown
         *
         * @type {string[]}
         * @memberof Dropdown
         */
        this.options = [];
        /**
         * Selected option to show in the dropdown
         *
         * @type {string}
         * @memberof Dropdown
         */
        this.selectedOption = null;
        /**
         * Default text to show when no option is selected
         *
         * @type {string}
         * @memberof Dropdown
         */
        this.defaultText = '';
        /**
         * Allow the user to clear selected option
         *
         * @type {string}
         * @memberof Dropdown
         */
        this.showClearButton = false;
        this.isOpen = false;
        this.selectedOptionObject = {};
        /**
         * Function called when clicking outside of the dropdown.
         * By default it closes the list.
         *
         * @type {function}
         * @memberof Dropdown
         */
        this.onClickOutside = function () { _this._closeList(); };
        this.optionChanged = createEvent(this, "optionChanged", 7);
    }
    /**
     * Closes the list, useful in case you need to customize {onClickOutside}
     *
     * @memberof Dropdown
     */
    class_1.prototype.closeList = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this._closeList();
                return [2 /*return*/];
            });
        });
    };
    class_1.prototype.onSelectionChanged = function (newValue) {
        this._selectFromValue(newValue);
    };
    class_1.prototype.onOptionsChanged = function () {
        this._selectFromValue(this.selectedOption);
    };
    class_1.prototype.onClickOutsideChanged = function (newValue, oldValue) {
        document.removeEventListener('click', oldValue);
        document.addEventListener('click', newValue);
    };
    class_1.prototype.componentWillLoad = function () {
        this._selectFromValue(this.selectedOption);
    };
    class_1.prototype.componentDidLoad = function () {
        document.addEventListener('click', this.onClickOutside);
    };
    class_1.prototype.componentDidUnload = function () {
        document.removeEventListener('click', this.onClickOutside);
    };
    class_1.prototype.render = function () {
        var _this = this;
        var allowRemoveSelectedOption = this.showClearButton && Boolean(this.selectedOption);
        var controlClasses = {
            'as-dropdown': true,
            'as-dropdown--clear': allowRemoveSelectedOption,
            'as-dropdown--open': this.isOpen
        };
        return (h("div", { class: controlClasses }, h("button", { class: 'as-dropdown__control as-body', "aria-haspopup": 'true', "aria-expanded": this.isOpen, onClick: function (e) { e.stopPropagation(); _this._toggleList(); } }, this.selectedOptionObject && this.selectedOptionObject.text
            || this.selectedOptionObject && this.selectedOptionObject.value
            || this.defaultText, h("div", { class: 'as-dropdown__arrow' }, h("svg", { viewBox: '2 6 12 6', xmlns: 'http://www.w3.org/2000/svg' }, h("path", { d: 'M8.30988427,11.1237193 L7.69011573,11.1237193 L15.2195214,4.12372525 C15.415115,3.94188438 15.7124148,3.96294311 15.8835591,4.17076125 C16.0547035,4.37857939 16.0348835,4.69446043 15.83929,4.8763013 L8.30988427,11.8762953 C8.13246042,12.041244 7.86753958,12.041244 7.69011573,11.8762953 L0.160710032,4.8763013 C-0.034883519,4.69446043 -0.0547035068,4.37857939 0.116440851,4.17076125 C0.287585208,3.96294311 0.584885024,3.94188438 0.780478575,4.12372525 L8.30988427,11.1237193 Z' })))), h("ul", { tabindex: '-1', class: 'as-dropdown__list' }, this._renderOptions(this.options)), allowRemoveSelectedOption ?
            h("button", { class: 'as-dropdown__clear', onClick: function () { return _this.clearOption(); } }, h("svg", { viewBox: '2 2 12 12', xmlns: 'http://www.w3.org/2000/svg' }, h("path", { d: 'M8,8.58232323 L1.70292632,14.8793969 C1.5421222,15.040201 1.28140721,15.040201 1.12060309,14.8793969 C0.95979897,14.7185928 0.95979897,14.4578778 1.12060309,14.2970737 L7.41767677,8 L1.12060309,1.70292632 C0.95979897,1.5421222 0.95979897,1.28140721 1.12060309,1.12060309 C1.28140721,0.95979897 1.5421222,0.95979897 1.70292632,1.12060309 L8,7.41767677 L14.2970737,1.12060309 C14.4578778,0.95979897 14.7185928,0.95979897 14.8793969,1.12060309 C15.040201,1.28140721 15.040201,1.5421222 14.8793969,1.70292632 L8.58232323,8 L14.8793969,14.2970737 C15.040201,14.4578778 15.040201,14.7185928 14.8793969,14.8793969 C14.7185928,15.040201 14.4578778,15.040201 14.2970737,14.8793969 L8,8.58232323 Z' }))) : ''));
    };
    class_1.prototype._renderOptions = function (options) {
        var _this = this;
        return options.map(function (option) {
            var buttonClasses = {
                'as-body': true,
                'is-selected': _this._isSelected(option)
            };
            return (h("li", { class: 'as-dropdown__list-item', "data-value": option.value }, h("button", { class: buttonClasses, onClick: function (e) { e.stopPropagation(); _this._select(option); } }, option.text || option.value)));
        });
    };
    class_1.prototype._isSelected = function (option) {
        return option === this.selectedOptionObject;
    };
    class_1.prototype._select = function (optionObject) {
        if (this.selectedOption === optionObject.value) {
            return;
        }
        this.selectedOption = optionObject.value;
        this.selectedOptionObject = optionObject;
        this._closeList();
        this._emitOption();
    };
    class_1.prototype._selectFromValue = function (value) {
        if (value === undefined || value === null) {
            this.selectedOptionObject = null;
            return;
        }
        var selectedOptionObject = this.options.find(function (option) { return option.value === value; });
        if (selectedOptionObject) {
            this.selectedOptionObject = selectedOptionObject;
        }
    };
    class_1.prototype._toggleList = function () {
        this.isOpen = !this.isOpen;
    };
    class_1.prototype._closeList = function () {
        this.isOpen = false;
    };
    class_1.prototype.clearOption = function () {
        this._closeList();
        this.selectedOption = null;
        this._emitOption();
    };
    class_1.prototype._emitOption = function () {
        if (this.optionChanged) {
            this.optionChanged.emit(this.selectedOption);
        }
    };
    Object.defineProperty(class_1, "watchers", {
        get: function () {
            return {
                "selectedOption": ["onSelectionChanged"],
                "options": ["onOptionsChanged"],
                "onClickOutside": ["onClickOutsideChanged"]
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_1, "style", {
        get: function () { return ".as-menu-dropdown{--as--menu-dropdown--color--hover:var(--as--color--complementary--hover,#e0f9ee);--as--menu-dropdown--top-border--color:var(--as--color--ui-01,#fff);--as--menu-dropdown--li--border-color:var(--as--color--ui-04,#d1d5d7);--as--menu-dropdown--li--background-color:var(--as--color--ui-01,#fff);--as--menu-dropdown--li--color:var(--as--color--text,#000);position:relative}.as-menu-dropdown--input{width:100%;min-height:32px;margin:0;padding:0 12px;border:0;border-radius:4px;background:var(--as--color--ui-01);color:var(--as--color--primary);font:var(--as--font--body);text-align:left;cursor:pointer}.as-menu-dropdown--input:focus,.as-menu-dropdown--input:hover{background-color:var(--as--menu-dropdown--color--hover)}.as-menu-dropdown--options{position:absolute;z-index:3;width:100%;height:0;margin:0 auto;padding:0;overflow:hidden;border-radius:4px;background:inherit;-webkit-box-shadow:0 2px 8px 0 var(--as--color--shadow,rgba(44,44,44,.16));box-shadow:0 2px 8px 0 var(--as--color--shadow,rgba(44,44,44,.16))}.as-menu-dropdown--options li{display:-ms-flexbox;display:flex;-ms-flex-align:start;align-items:flex-start;width:100%;padding:0 12px;-webkit-transition:background-color .3s;transition:background-color .3s;border:0;border-bottom:1px solid var(--as--menu-dropdown--li--border-color);outline:none;background-color:var(--as--menu-dropdown--li--background-color);color:var(--as--menu-dropdown--li--color);font:var(--as--font--body);list-style:none;cursor:pointer}.as-menu-dropdown--options li:first-child{border-top:1px solid var(--as--menu-dropdown--top-border--color);border-radius:4px 4px 0 0}.as-menu-dropdown--options li:last-child{border-bottom:0;border-radius:0 0 4px 4px}.as-menu-dropdown--options li:focus-within,.as-menu-dropdown--options li:hover{background-color:var(--as--menu-dropdown--color--hover)}.as-menu-dropdown--options li button{width:100%;height:100%;min-height:32px;padding:0;border:none;outline:none;background-color:inherit;color:inherit;text-align:left;cursor:pointer}.as-menu-dropdown--options:focus,.as-menu-dropdown--options:hover{height:auto}.as-menu-dropdown--options:focus-within{height:auto}.as-menu-dropdown--input:focus+.as-menu-dropdown--options,.as-menu-dropdown--input:hover+.as-menu-dropdown--options{height:auto}as-dropdown{--as-dropdown__arrow-color:var(--as-dropdown--color--main);--as-dropdown__list--background-color:var(--as--color--ui-01,#fff);--as-dropdown__list--border-color:var(--as--color--ui-03,#e2e6e3);--as-dropdown--background-color:var(--as--color--ui-01,#fff);--as-dropdown--color--hover:var(--as--color--complementary--hover,#e0f9ee);--as-dropdown--color--main:var(--as--color--primary,#1785fb);--as-dropdown--color--secondary:var(--as--color--ui-04,#d1d5d7);--as-dropdown--color--selected:var(--as--color--complementary--active,#c6f4df);--as-dropdown--color:var(--as--color--text,#000);display:block}as-dropdown .as-dropdown{position:relative}as-dropdown .as-dropdown__control{position:relative;width:100%;min-height:16px;margin:0;padding:8px 32px 8px 8px;overflow:hidden;border:0;border-radius:4px;background-color:var(--as-dropdown--background-color);-webkit-box-shadow:inset 0 0 0 1px var(--as-dropdown--color--secondary);box-shadow:inset 0 0 0 1px var(--as-dropdown--color--secondary);color:var(--as-dropdown--color);text-align:left;text-overflow:ellipsis;white-space:nowrap;cursor:pointer}as-dropdown .as-dropdown__arrow{position:absolute;top:50%;right:12px;width:12px;-webkit-transform:translate3d(0,-50%,0);transform:translate3d(0,-50%,0);background-repeat:no-repeat}as-dropdown .as-dropdown__arrow path{fill:var(--as-dropdown__arrow-color)}as-dropdown .as-dropdown__control:focus{outline:none}as-dropdown .as-dropdown__list{display:none;position:absolute;z-index:1;width:100%;margin:8px 0 0;padding:0;overflow:hidden;border:1px solid var(--as-dropdown__list--border-color);border-radius:4px;background-color:var(--as-dropdown__list--background-color);-webkit-box-shadow:0 2px 8px 0 var(--as--color--shadow,rgba(44,44,44,.16));box-shadow:0 2px 8px 0 var(--as--color--shadow,rgba(44,44,44,.16))}as-dropdown .as-dropdown__list-item{border:0;outline:none;cursor:pointer}as-dropdown .as-dropdown__list-item:not(:last-child){border-bottom:1px solid var(--as-dropdown__list--border-color)}as-dropdown .as-dropdown__list-item button{width:100%;height:100%;margin:0;padding:8px 12px;border:0;outline:none;background-color:var(--as-dropdown--background-color);color:var(--as-dropdown--color);text-align:left;cursor:inherit}as-dropdown .as-dropdown__list-item button:hover{background:var(--as-dropdown--color--hover)}as-dropdown .as-dropdown__list-item button.is-selected{background:var(--as-dropdown--color--selected)}as-dropdown .as-dropdown--open .as-dropdown__control{-webkit-box-shadow:inset 0 0 0 2px var(--as-dropdown--color--main);box-shadow:inset 0 0 0 2px var(--as-dropdown--color--main)}as-dropdown .as-dropdown--open .as-dropdown__list{display:block}as-dropdown .as-dropdown--clear{width:calc(100% - 36px)}as-dropdown .as-dropdown__clear{position:absolute;top:50%;right:-24px;width:12px;height:12px;margin:0;padding:0;-webkit-transform:translate3d(0,-50%,0);transform:translate3d(0,-50%,0);border:0;background-color:var(--as-dropdown--background-color);cursor:pointer}as-dropdown .as-dropdown__clear path{fill:var(--as-dropdown--color--main)}"; },
        enumerable: true,
        configurable: true
    });
    return class_1;
}());
export { Dropdown as as_dropdown };
