import { EventEmitter } from '../../../stencil.core';
export declare class RangeSliderThumb {
    percentage: number;
    value: number;
    valueMin: number;
    valueMax: number;
    disabled: boolean;
    showCaption: boolean;
    formatValue: (value: number) => string | number;
    thumbMove: EventEmitter<number>;
    thumbChangeStart: EventEmitter<void>;
    thumbChangeEnd: EventEmitter<void>;
    thumbIncrease: EventEmitter<number>;
    thumbDecrease: EventEmitter<number>;
    thumbRender: EventEmitter<void>;
    element: HTMLElement;
    railElement: HTMLElement;
    thumbValue: HTMLElement;
    railBoundingClientRect: ClientRect | DOMRect;
    componentDidRender(): void;
    render(): any;
    onMouseDown(event: MouseEvent): void;
    onKeyDown(event: KeyboardEvent): void;
    private _onMove;
    private _onRelease;
    private _renderDisplayValue;
    private _getDisplayValue;
    private setCursorTo;
}
