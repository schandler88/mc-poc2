import { EventEmitter } from '../../stencil.core';
/**
 * Layer Selector
 *
 * @export
 * @class LayerSelector
 */
export declare class LayerSelector {
    layers: string[];
    onToggleLayer: EventEmitter;
    onToggleCheckbox(evt: any): void;
    render(): any;
    private _renderCheckbox;
}
