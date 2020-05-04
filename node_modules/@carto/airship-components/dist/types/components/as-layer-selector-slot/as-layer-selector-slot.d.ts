import { EventEmitter } from '../../stencil.core';
/**
 * Layer Selector Slot
 *
 * @export
 * @class LayerSelectorSlot
 */
export declare class LayerSelectorSlot {
    layer: any;
    index: number;
    visible: boolean;
    /**
     * This method proxies the toggleLayer event
     */
    onToggleCheckbox: EventEmitter;
    toggleCheckbox(): void;
    render(): any;
    private _onChange;
}
