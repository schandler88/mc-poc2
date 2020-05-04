export declare class LegendSizeBinsPoint {
    data: LegendData[];
    orientation: 'horizontal' | 'vertical';
    width: number;
    private maxSize;
    render(): any;
    private renderStep;
    private getMask;
}
