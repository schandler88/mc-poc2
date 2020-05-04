import { h } from "@stencil/core";
export class Switch {
    /**
     * When the component is attached to the DOM bind the onClick function
     */
    componentDidLoad() {
        this.el.addEventListener('click', this._onClick.bind(this));
    }
    /**
     * Fire a 'change' event with a boolean parameter if the user clicks on an enabled component
     */
    _onClick() {
        const input = this.el.querySelector('input');
        if (!this.disabled) {
            input.checked = !input.checked;
            this.checked = input.checked;
            this.change.emit(input.checked);
        }
    }
    render() {
        if (this.label) {
            return (h("div", { class: 'as-switch' },
                h("div", { class: 'as-switch__element' }, this._renderSwitch()),
                h("label", { class: 'as-switch__label as-body' }, this.label)));
        }
        return this._renderSwitch();
    }
    _renderSwitch() {
        return [
            h("input", { class: 'as-switch__input', checked: this.checked, disabled: this.disabled, role: 'switch', id: this.el.id, name: this.name, type: 'checkbox', title: this.el.title }),
            h("label", { class: 'as-switch__toggle', htmlFor: this.el.id }),
            h("svg", { class: 'as-switch__thumb', width: '10', height: '8', xmlns: 'http://www.w3.org/2000/svg' },
                h("path", { fill: 'currentColor', 
                    // tslint:disable-next-line
                    d: 'M3.315 7.858L.133 4.441a.506.506 0 0 1 0-.683l.643-.684a.437.437 0 0 1 .642 0l2.219 2.393L8.58.141a.437.437 0 0 1 .643 0l.643.683a.504.504 0 0 1 0 .683l-5.91 6.35a.437.437 0 0 1-.642 0' }))
        ];
    }
    static get is() { return "as-switch"; }
    static get originalStyleUrls() { return {
        "$": ["./as-switch.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["as-switch.css"]
    }; }
    static get properties() { return {
        "checked": {
            "type": "boolean",
            "mutable": true,
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
                        "text": "Switch",
                        "name": "memberof"
                    }],
                "text": "Boolean flag to control if the input is checked or not"
            },
            "attribute": "checked",
            "reflect": true
        },
        "disabled": {
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
                        "text": "Switch",
                        "name": "memberof"
                    }],
                "text": "Boolean flag to control when the switch is disabled or not"
            },
            "attribute": "disabled",
            "reflect": true
        },
        "label": {
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
                        "text": "Switch",
                        "name": "memberof"
                    }],
                "text": "Input label"
            },
            "attribute": "label",
            "reflect": false
        },
        "name": {
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
                        "text": "Switch",
                        "name": "memberof"
                    }],
                "text": "The input name"
            },
            "attribute": "name",
            "reflect": true
        }
    }; }
    static get events() { return [{
            "method": "change",
            "name": "change",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [{
                        "text": "{boolean}",
                        "name": "type"
                    }, {
                        "text": "Switch",
                        "name": "memberof"
                    }],
                "text": "Event triggered by a enabled Switch component when the user clicks on it."
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }]; }
    static get elementRef() { return "el"; }
}
