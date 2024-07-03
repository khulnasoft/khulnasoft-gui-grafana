import { L7Trace } from "../../types";
import * as d3 from 'd3';
export declare const getServiceId: (d: L7Trace) => any;
export declare const render: (a: Array<L7Trace>) => (b: d3.Selection<SVGSVGElement, any, HTMLElement, any>, c: Record<string, any>) => Record<string, any>;
