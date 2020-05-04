export declare class LegendSizeBinsPoint {
    data: LegendData[];
    orientation: 'horizontal' | 'vertical';
    aligned: boolean;
    factor: number;
    minWidth: number;
    private maxSize;
    render(): any;
    private renderStep;
}
