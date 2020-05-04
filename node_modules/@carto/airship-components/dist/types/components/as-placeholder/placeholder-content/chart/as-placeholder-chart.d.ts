export declare class PlaceholderChart {
    element: HTMLElement;
    barWidth: number;
    elementWidth: number;
    resizeTimerId: any;
    onWindowResize(): void;
    componentDidLoad(): void;
    render(): any[];
    renderBars(numberOfBars: number): any[];
    setElementWidth(): void;
}
