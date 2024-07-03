import { Node, Link } from "../../d4";
import { TopoData } from "../../types";
declare const _default: <T>(container: d3.Selection<SVGSVGElement, any, HTMLElement, any>, data: TopoData, options: {
    getNodeIcon: (d: Node<T>, icons?: Record<string | number, string>) => string;
    getNodeColor: (d: Node<T>) => string;
    getNodeTitle: (d: Node<T>) => string;
    getMetrics: (d: Node<T>) => {
        key: string;
        value: number | string;
        color?: string;
    }[];
    getLinkColor: (d: Link<T>) => string;
    getNodePosition?: (d: Node<T>) => [number, number];
    getGroupName?: (d: any) => string;
    getGroupNameColor?: (d: any) => string;
    setLinkStyle?: (a: Link<T>) => any;
    setNodeStyle?: (a: Node<T>) => any;
    linkTip?: string | ((a: Link<T>) => string);
    linkTipSize?: number;
    setLinkTip?: (a: d3.Selection<SVGTextElement, any, HTMLElement, any>, b: Link<T>) => any;
    nodeSize?: [number, number];
    fromKey?: string;
    toKey?: string;
    idKey?: string;
} & Record<any, any>) => {
    render: (nodes: Node<T>[], links: Link<T>[], transition?: d3.Transition<SVGElement, any, HTMLElement, any> | null) => void;
    nodes: Node<Record<any, any>>[];
    links: Link<Record<any, any>>[];
    svg: import("d3-selection").Selection<SVGSVGElement, any, HTMLElement, any>;
    container: import("d3-selection").Selection<SVGGElement, any, HTMLElement, any>;
    zoom: import("d3-zoom").ZoomBehavior<Element, unknown>;
    group(groupBy: (d: Record<any, any>) => number): void;
    ungroup(): void;
};
export default _default;
