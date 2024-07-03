import * as d3 from 'd3';
import { Link, Node } from "../../d4";
export declare const renderTree: <T extends Record<any, any>>(container: d3.Selection<SVGSVGElement | SVGGElement, any, HTMLElement, any>, linkData: any[], nodeData: T[], options?: Record<string, any>) => {
    container: d3.Selection<SVGGElement, any, HTMLElement, any>;
    nodes: Node<T>[];
    links: Link<T>[];
    x: number;
    y: number;
    width: number;
    height: number;
};
export declare const renderNode: (options?: Record<any, any>) => void;
export declare const renderLink: (options?: Record<any, any>) => void;
