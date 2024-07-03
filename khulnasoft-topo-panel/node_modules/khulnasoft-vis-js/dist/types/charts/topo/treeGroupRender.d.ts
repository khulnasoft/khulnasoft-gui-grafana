import { Link, Node } from "../../d4";
export declare const renderTreeGroup: <T extends Record<any, any>>(container: d3.Selection<SVGSVGElement | SVGGElement, any, HTMLElement, any>, linkData: any[], nodeData: T[], groupIdFunc?: (d: T) => string | number, options?: Record<any, any>) => {
    container: d3.Selection<SVGSVGElement | SVGGElement, any, HTMLElement, any>;
    nodes: Node<T>[];
    links: Link<T>[];
    groups: Node<Record<any, any>>[];
    width: number;
    height: number;
};
