import * as d3 from 'd3';
export declare const removeTooltipDomOfContainer: (container: string, dom?: string) => void;
export declare const addTooltipDom: (container: string, options: Record<any, any>) => {
    dom: d3.Selection<HTMLDivElement, unknown, HTMLElement, any>;
    status: string;
    show(event: MouseEvent | PointerEvent | Touch): any;
    hide(): any;
    setContent(html: string): any;
};
