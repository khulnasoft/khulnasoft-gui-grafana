import * as d3 from 'd3';
import { Node, Link } from "../../d4";
export declare const renderNode: <T>(options: {
    getNodeTitle: (node: Node<T>) => string;
    getNodeColor: (node: Node<T>) => string;
    getMetrics: (node: Node<T>) => {
        key: string;
        value: number | string;
        color?: string;
    }[];
    getNodeIcon: (node: Node<T>) => string;
    setNodeStyle?: (node: Node<T>) => any;
    transition?: d3.Transition<SVGElement, any, HTMLElement, any>;
} & Record<string, any>) => void;
export declare const getPathD: <T>(link: Link<T>) => string;
export declare const renderLink: <T>(options: {
    getLinkColor: (a: Link<T>) => string;
    getLinkV: (a: Link<T>) => number | string;
    getLinkSize: (a: Link<T>) => number;
    setLinkStyle?: (a: Link<T>) => any;
    transition?: d3.Transition<SVGElement, any, HTMLElement, any>;
} & Record<any, any>) => void;
export declare const renderGroup: (options?: Record<any, any>) => void;
export declare const bindCustomMouseEvent: <T>(node: Link<T> | Node<T>, event: string, handler: (e: MouseEvent, d: Link<T> | Node<T>) => any) => void;
export declare const blurEle: <T>(node: Node<T> | Link<T>) => void;
export declare const normalizeEle: <T>(node: Node<T> | Link<T>) => void;
export declare const liftEle: <T>(node: Node<T> | Link<T>) => void;
export declare const enableDragNodes: <T>(nodes: Node<T>[]) => void;
export declare const bindDefaultActions: <T>(links: Link<T>[], nodes: Node<T>[]) => {
    normalizeAll: () => void;
    highlightNode: (node: Node<T>) => void;
    highlightLink: (link: Link<T>) => void;
};
export declare const bindDefaultMouseEvent: <T>(links: Link<T>[], nodes: Node<T>[], svg: d3.Selection<SVGSVGElement, any, HTMLElement, any>) => {
    normalizeAll: () => void;
    highlightNode: (node: Node<T>) => void;
    highlightLink: (link: Link<T>) => void;
};
