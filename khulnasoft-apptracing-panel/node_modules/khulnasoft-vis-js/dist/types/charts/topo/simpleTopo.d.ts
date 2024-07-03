import * as d3 from 'd3';
import { Link, Node } from "../../d4";
export declare const renderSimpleTopo: <T extends Record<any, any>>(container: d3.Selection<SVGSVGElement | SVGGElement, any, HTMLElement, any>, linkData: any[], nodeData: T[], options?: Record<any, any>) => {
    nodes: Node<unknown>[];
    links: Link<T>[];
};
export declare const computeNodesPos: <T>(nodes: Node<T>[], width: number, options: {
    nodeGap: [number, number];
    nodeSize: [number, number];
    layerGap: number;
}) => void;
