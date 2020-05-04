'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-894cddb9.js');
const icons = require('./icons-2d2d2d13.js');
const content_fragment = require('./content.fragment-1307ce73.js');

const AnimationControlsWidget = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
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
        this.play = core.createEvent(this, "play", 7);
        this.pause = core.createEvent(this, "pause", 7);
        this.seek = core.createEvent(this, "seek", 7);
    }
    render() {
        return this.showHeader && (this.heading || this.description)
            ? [this._renderHeader(), this._renderContent()]
            : this._renderContent();
    }
    _renderHeader() {
        return core.h("as-widget-header", { header: this.heading, subheader: this.description, "is-loading": this.isLoading, error: this.error, "no-data-message": this.noDataHeaderMessage });
    }
    _renderContent() {
        return content_fragment.contentFragment(this.isLoading, this.error, false, // isEmtpy
        this.heading, this.errorDescription, this.noDataBodyMessage, core.h("div", { class: 'as-animation-controls-widget__wrapper as-body' }, core.h("div", { class: 'as-animation-controls-widget__player' }, core.h("button", { class: 'as-btn', onClick: this._onPlayPauseClick.bind(this) }, icons.icon(this.playing ? 'PAUSE' : 'PLAY', 'var(--as--color--primary)', { width: '32px', height: '32px' })), core.h("as-range-slider", { value: this.progress, "min-value": this.min, "max-value": this.max, showThumb: this.showThumb, showThumbCaption: this.showThumbCaption, onChange: this._onThumbChange.bind(this), onChangeStart: this._onThumbChangeStart.bind(this), onChangeEnd: this._onThumbChangeEnd.bind(this) })), core.h("footer", { class: 'as-animation-controls__progress-value' }, this.progressValue)));
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
    static get style() { return "as-animation-controls-widget{--as--animation-controls-widget--background-color:var(--as--color--ui-01,#fff);--as--animation-controls-widget__progress-value--color:var(--as--color--type-02);display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;width:100%;min-width:228px;height:100%;max-height:100%;background:var(--as--animation-controls-widget--background-color)}as-animation-controls-widget as-loader{-ms-flex-pack:start;justify-content:flex-start}as-animation-controls-widget .as-animation-controls-widget__wrapper{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}as-animation-controls-widget .as-animation-controls__progress-value{color:var(--as--animation-controls-widget__progress-value--color)}as-animation-controls-widget .as-animation-controls-widget__player{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:start;justify-content:flex-start;padding:4px 0}as-animation-controls-widget .as-animation-controls-widget__player .as-btn{padding:0}as-animation-controls-widget .as-animation-controls-widget__player as-range-slider{width:100%;padding-top:10px}"; }
};

exports.as_animation_controls_widget = AnimationControlsWidget;
