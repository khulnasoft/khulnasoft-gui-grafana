import * as d3 from 'd3';
export declare const getPointOfAxis: (key: 'x' | 'y') => (path: SVGPathElement) => (x: number) => {
    x: number;
    y: number;
};
export declare const getPointOfX: (path: SVGPathElement) => (x: number) => {
    x: number;
    y: number;
};
export declare const getPointOfY: (path: SVGPathElement) => (x: number) => {
    x: number;
    y: number;
};
export declare function getArcLink(params: Record<any, any>): {
    arcPath: d3.Path;
    arcCenter: any[];
};
export declare const getPathPos: (node: SVGPathElement, pos: number) => DOMPoint;
export declare const addTipToPath: (node: SVGPathElement, direction?: number, offset?: number) => d3.Selection<d3.BaseType, unknown, null, undefined>;
export declare const addArrowToPath: (node: SVGPathElement, offset?: number, scale?: number, backgroundColor?: string) => d3.Selection<d3.BaseType, unknown, null, undefined>;
