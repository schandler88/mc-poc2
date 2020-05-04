import { h } from "@stencil/core";
import { icon } from '../../utils/icons';
import contentFragment from '../common/content.fragment';
export class AnimationControlsWidget {
    constructor() {
        /**
         * This attribute is the percentage of progress elapsed on an animation.
         */
        this.progress = 0;
        this.min = 0;
        this.max = 100;
        this.duration = 0;
        /**
         * Use this attribute to put the widget in "loading mode".
         * When loading mode is active, a spinner will be shown and the data will be hidden.
         */
        this.isLoading = false;
        this.showThumb = true;
        this.showThumbCaption = false;
        this.playing = false;
        /**
         * Toggles displaying title and description
         *
         * @type {boolean}
         * @memberof AnimationControlsWidget
         */
        this.showHeader = true;
        /**
         * Message shown in header when no data is available
         */
        this.noDataHeaderMessage = 'NO DATA AVAILABLE';
        /**
         * Message shown in body when no data is available
         */
        this.noDataBodyMessage = 'There is no data to display.';
        /**
         * Use this widget to put the widget in "error mode".
         * When error mode is active. The header will display the given text.
         * And the body will be display the errorDescription instead any data.
         */
        this.error = '';
        /**
         * Extended error description, only shown when error is present
         */
        this.errorDescription = '';
        this._isPlaying = false;
    }
    render() {
        return this.showHeader && (this.heading || this.description)
            ? [this._renderHeader(), this._renderContent()]
            : this._renderContent();
    }
    _renderHeader() {
        return h("as-widget-header", { header: this.heading, subheader: this.description, "is-loading": this.isLoading, error: this.error, "no-data-message": this.noDataHeaderMessage });
    }
    _renderContent() {
        return contentFragment(this.isLoading, this.error, false, // isEmtpy
        this.heading, this.errorDescription, this.noDataBodyMessage, h("div", { class: 'as-animation-controls-widget__wrapper as-body' },
            h("div", { class: 'as-animation-controls-widget__player' },
                h("button", { class: 'as-btn', onClick: this._onPlayPauseClick.bind(this) }, icon(this.playing ? 'PAUSE' : 'PLAY', 'var(--as--color--primary)', { width: '32px', height: '32px' })),
                h("as-range-slider", { value: this.progress, "min-value": this.min, "max-value": this.max, showThumb: this.showThumb, showThumbCaption: this.showThumbCaption, onChange: this._onThumbChange.bind(this), onChangeStart: this._onThumbChangeStart.bind(this), onChangeEnd: this._onThumbChangeEnd.bind(this) })),
            h("footer", { class: 'as-animation-controls__progress-value' }, this.progressValue)));
    }
    _onPlayPauseClick(evt) {
        this.playing ? this._pause(evt) : this._play(evt);
    }
    _pause(evt) {
        this.pause.emit(evt);
        this.playing = false;
    }
    _play(evt) {
        this.play.emit(evt);
        this.playing = true;
    }
    _onThumbChange(evt) {
        this.seek.emit(evt.detail);
    }
    _onThumbChangeStart(evt) {
        this._isPlaying = this.playing;
        if (this.playing) {
            this._pause(evt);
        }
    }
    _onThumbChangeEnd(evt) {
        if (this._isPlaying) {
            this._play(evt);
        }
    }
    static get is() { return "as-animation-controls-widget"; }
    static get originalStyleUrls() { return {
        "$": ["./as-animation-controls-widget.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["as-animation-controls-widget.css"]
    }; }
    static get properties() { return {
        "progress": {
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
                "text": "This attribute is the percentage of progress elapsed on an animation."
            },
            "attribute": "progress",
            "reflect": false,
            "defaultValue": "0"
        },
        "min": {
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
            "attribute": "min",
            "reflect": false,
            "defaultValue": "0"
        },
        "max": {
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
            "attribute": "max",
            "reflect": false,
            "defaultValue": "100"
        },
        "duration": {
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
            "attribute": "duration",
            "reflect": false,
            "defaultValue": "0"
        },
        "progressValue": {
            "type": "any",
            "mutable": false,
            "complexType": {
                "original": "number | string",
                "resolved": "number | string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "progress-value",
            "reflect": false
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
                "text": "Use this attribute to put the widget in \"loading mode\".\nWhen loading mode is active, a spinner will be shown and the data will be hidden."
            },
            "attribute": "is-loading",
            "reflect": false,
            "defaultValue": "false"
        },
        "showThumb": {
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
                "text": ""
            },
            "attribute": "show-thumb",
            "reflect": false,
            "defaultValue": "true"
        },
        "showThumbCaption": {
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
                "text": ""
            },
            "attribute": "show-thumb-caption",
            "reflect": false,
            "defaultValue": "false"
        },
        "playing": {
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
                "text": ""
            },
            "attribute": "playing",
            "reflect": false,
            "defaultValue": "false"
        },
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
                        "text": "AnimationControlsWidget",
                        "name": "memberof"
                    }],
                "text": "Title of the widget to be displayed"
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
                        "text": "AnimationControlsWidget",
                        "name": "memberof"
                    }],
                "text": "Description of the widget to be displayed"
            },
            "attribute": "description",
            "reflect": false
        },
        "showHeader": {
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
                        "text": "AnimationControlsWidget",
                        "name": "memberof"
                    }],
                "text": "Toggles displaying title and description"
            },
            "attribute": "show-header",
            "reflect": false,
            "defaultValue": "true"
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
                "text": "Use this widget to put the widget in \"error mode\".\nWhen error mode is active. The header will display the given text.\nAnd the body will be display the errorDescription instead any data."
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
        }
    }; }
    static get events() { return [{
            "method": "play",
            "name": "play",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "User clicks the play button"
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }, {
            "method": "pause",
            "name": "pause",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "User clicks the pause button"
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }, {
            "method": "seek",
            "name": "seek",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "The user has seeked the animation to this percentage."
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }]; }
}
