export declare class AnimationControlsWidget {
    /**
     * This attribute is the percentage of progress elapsed on an animation.
     */
    progress: number;
    min: number;
    max: number;
    duration: number;
    progressValue: number | string;
    /**
     * Use this attribute to put the widget in "loading mode".
     * When loading mode is active, a spinner will be shown and the data will be hidden.
     */
    isLoading: boolean;
    showThumb: boolean;
    showThumbCaption: boolean;
    playing: boolean;
    /**
     * Title of the widget to be displayed
     *
     * @type {string}
     * @memberof AnimationControlsWidget
     */
    heading: string;
    /**
     * Description of the widget to be displayed
     *
     * @type {string}
     * @memberof AnimationControlsWidget
     */
    description: string;
    /**
     * Toggles displaying title and description
     *
     * @type {boolean}
     * @memberof AnimationControlsWidget
     */
    showHeader: boolean;
    /**
     * Message shown in header when no data is available
     */
    noDataHeaderMessage: string;
    /**
     * Message shown in body when no data is available
     */
    noDataBodyMessage: string;
    /**
     * Use this widget to put the widget in "error mode".
     * When error mode is active. The header will display the given text.
     * And the body will be display the errorDescription instead any data.
     */
    error: string;
    /**
     * Extended error description, only shown when error is present
     */
    errorDescription: string;
    private _isPlaying;
    /**
     * User clicks the play button
     */
    private play;
    /**
     * User clicks the pause button
     */
    private pause;
    /**
     * The user has seeked the animation to this percentage.
     */
    private seek;
    render(): any;
    private _renderHeader;
    private _renderContent;
    private _onPlayPauseClick;
    private _pause;
    private _play;
    private _onThumbChange;
    private _onThumbChangeStart;
    private _onThumbChangeEnd;
}
