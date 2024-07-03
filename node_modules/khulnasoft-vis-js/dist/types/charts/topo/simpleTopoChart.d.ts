import { Node, Link } from "../../d4";
import { TopoData } from "../../types";
declare const _default: <T>(container: d3.Selection<SVGSVGElement, any, HTMLElement, any>, data: TopoData, options: {
    getNodeV: (node: Node<T>) => number;
    getNodeIcon: (node: Node<T>) => string;
    getNodeColor: (node: Node<T>) => string;
    getNodeTitle: (node: Node<T>) => string | Promise<string>;
    getLinkV: (link: Link<T>) => number;
    getLinkColor: (link: Link<T>) => string;
    getNodeLayer?: (node: Node<T>) => number;
    setLinkStyle?: (a: Link<T>) => any;
    setNodeStyle?: (a: Link<T>) => any;
    linkTip?: string | ((a: Link<T>) => string);
    linkTipSize?: number;
    setLinkTip?: (a: d3.Selection<SVGTextElement, any, HTMLElement, any>, b: Link<T>) => any;
    nodeRenderType?: string;
    nodeRenderSize?: number;
    linkRenderSize?: number;
    nodeSize?: [number, number];
    fromKey?: string;
    toKey?: string;
    idKey?: string;
} & Record<string, any>) => {
    nodes: Node<T>[];
    links: Link<T>[];
    zoom: d3.ZoomBehavior<Element, any>;
};
export default _default;
