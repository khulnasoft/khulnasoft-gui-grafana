import * as d3 from 'd3';
import { Link, Node } from "../../d4";
import { Point } from "../../types";
export declare const renderNodeTitle: <T>(g: d3.Selection<SVGGElement, any, HTMLElement, any>, node: Node<T>, options: {
    getNodeTitle: <T_1>(node: Node<T_1>) => string | Promise<string>;
} & Record<any, any>) => d3.Selection<any, any, any, any>;
export declare const renderNode: <T>(options: {
    getNodeV: (node: Node<T>) => number;
    getNodeSize: (a: number) => number;
    getNodeColor: (node: Node<T>) => string;
    getNodeTitle: (node: Node<T>) => string;
    getNodeIcon: (node: Node<T>) => string | Promise<string>;
    setNodeStyle?: (a: Node<T>) => any;
} & Record<any, any>) => any;
export declare const getDirectLink: (source: Point, target: Point) => string;
export declare const getPathD: <T>(link: Link<T>, options?: Record<any, any>) => string | d3.Path;
export declare const addLinkEffect: <T>(link: Link<T>, options: Record<any, any>) => d3.Selection<any, any, any, any>;
export declare const renderLink: <T>(options: {
    getLinkV: (a: Link<T>) => number;
    getLinkSize: (a: number) => number;
    getLinkColor: (a: Link<T>) => string;
    setLinkStyle?: (a: Link<T>) => any;
} & Record<any, any>) => d3.Selection<any, any, any, any>;
export declare const startLinkAnimation: <T>(link: Link<T>) => void;
export declare const stopLinkAnimation: <T>(link: Link<T>) => void;
export declare const blurEle: <T>(node: Node<T> | Link<T>) => void;
export declare const normalizeEle: <T>(node: Node<T> | Link<T>) => void;
export declare const liftEle: <T>(node: Node<T> | Link<T>) => void;
export declare const enableDragNodes: <T>(nodes: Node<T>[]) => void;
export declare const bindCustomMouseEvent: <T>(node: Link<T> | Node<T>, event: string, handler: (e: MouseEvent, d: Link<T> | Node<T>) => any) => void;
export declare const bindDefaultActions: <T>(links: Link<T>[], nodes: Node<T>[]) => {
    normalizeAll: () => void;
    highlightNode: (node: Node<T>) => void;
    highlightLink: (link: Link<T>) => void;
};
export declare const bindDefaultMouseEvent: <T>(links: Link<T>[], nodes: Node<T>[], container: d3.Selection<SVGGElement, any, HTMLElement, any>) => {
    normalizeAll: () => void;
    highlightNode: (node: Node<T>) => void;
    highlightLink: (link: Link<T>) => void;
};
