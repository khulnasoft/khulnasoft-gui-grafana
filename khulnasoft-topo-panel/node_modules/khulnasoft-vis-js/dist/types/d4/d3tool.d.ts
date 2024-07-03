import * as d3 from 'd3';
export declare const addSvg: (container: string, clear?: boolean) => d3.Selection<SVGSVGElement, unknown, HTMLElement, any>;
export declare const fitSvgToContainer: (svg: d3.Selection<SVGSVGElement, any, HTMLElement, any>, withViewBox?: boolean) => void;
