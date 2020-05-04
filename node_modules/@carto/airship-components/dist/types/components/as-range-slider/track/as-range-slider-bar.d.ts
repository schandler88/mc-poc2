import { EventEmitter } from '../../../stencil.core';
export declare class RangeSliderBar {
    rangeStartPercentage: number;
    rangeEndPercentage: number;
    stepPercentage: number;
    isDraggable: boolean;
    disabled: boolean;
    barMove: EventEmitter<number[]>;
    barChangeStart: EventEmitter<void>;
    barChangeEnd: EventEmitter<void>;
    element: HTMLElement;
    rangeBarElement: HTMLElement;
    railElement: HTMLElement;
    private previousMouseEvent;
    render(): any;
    onMouseDown(event: MouseEvent): void;
    onMove(event: MouseEvent): void;
    private _updateRangePercentages;
    private _onRelease;
    private _getMovementDelta;
    private _getRangeDifference;
    private setCursorTo;
}
