import { EventEmitter } from '../../../stencil.core';
export declare class RangeSlider {
    /**
     * Initial value.
     *
     * @type {number}
     * @memberof RangeSlider
     */
    value: number;
    /**
     * Initial range.
     *
     * @type {number}
     * @memberof RangeSlider
     */
    range: number[];
    /**
     * Bottom limit of the range.
     * You cannot drag your slider below this value. By default the value is 0.
     *
     * @type {number}
     * @memberof RangeSlider
     */
    minValue: number;
    /**
     * Top limit of the range.
     * You cannot drag your slider beyond this value. By default the value is 10.
     *
     * @type {number}
     * @memberof RangeSlider
     */
    maxValue: number;
    /**
     * Increment/decrement step of the slider.
     * You can change the step setting a different number to this property. Defaults to 1.
     *
     * @type {number}
     * @memberof RangeSlider
     */
    step: number;
    /**
     * Disables component if truthy
     *
     * @type {boolean}
     * @memberof RangeSlider
     */
    disabled: boolean;
    /**
     * @deprecated Use isDraggable instead
     * @type {boolean}
     * @memberof RangeSlider
     */
    draggable: boolean;
    /**
     * If this property is set to true, and it has multiple value, you can drag the entire track.
     *
     * @type {number}
     * @memberof RangeSlider
     */
    isDraggable: boolean;
    /**
     * Disables the range slider thumb
     *
     * @type {boolean}
     * @memberof RangeSlider
     */
    showThumb: boolean;
    /**
     * Disables the range slider thumb caption
     *
     * @type {boolean}
     * @memberof RangeSlider
     */
    showThumbCaption: boolean;
    /**
     * If this property receives a function, it will be used to format the numbers (eg. for adding $ or €).
     *
     * @type {function (value: number)}
     * @memberof RangeSlider
     */
    formatValue: (value: number) => string | number;
    change: EventEmitter<number[]>;
    changeStart: EventEmitter<number[]>;
    changeEnd: EventEmitter<number[]>;
    element: HTMLElement;
    private thumbs;
    private areLabelsColliding;
    private isLeftLabelOverflowing;
    private isRightLabelOverflowing;
    validateValue(newValue: number): void;
    validateRange(newRange: number[]): void;
    componentWillLoad(): void;
    componentDidRender(): void;
    componentDidLoad(): void;
    render(): any;
    private _getLabelOffsetPercentage;
    private _updateThumbs;
    private _renderThumb;
    private _renderRangeBar;
    private _renderCollapsedLabel;
    private _getCurrentThumbPercentages;
    private _shouldShowCaption;
    private _validateValues;
    private _createThumbs;
    private _getThumbData;
    private _isBetweenValidValues;
    private _sliderHasRange;
    private _onKeyboardThumbMove;
    private _onThumbMove;
    private _onBarMove;
    private _emitChangeIn;
    private _getPercentage;
    private _getValueFromPercentage;
    private _getStepPercentage;
    private _clampThumbValues;
    private _getStepValue;
    private roundToStep;
    private _checkLabelOverflow;
    private checkThumbCollision;
    private checkOverflowInParentContainer;
}
