import * as d3 from 'd3';
import { TopoData } from "../../types";
import { Link, Node } from "../../d4";
export declare const renderTreeGroupTopo: (container: d3.Selection<SVGSVGElement, any, HTMLElement, any>, data: TopoData, options?: Record<any, any>) => {
    container: d3.Selection<SVGSVGElement | SVGGElement, any, HTMLElement, any>;
    nodes: Node<Record<any, any>>[];
    links: Link<Record<any, any>>[];
    groups: Node<Record<any, any>>[];
    width: number;
    height: number;
};
export declare const renderTreeTopo: (container: d3.Selection<SVGSVGElement, any, HTMLElement, any>, data: TopoData, options?: Record<any, any>) => {
    zoom: d3.ZoomBehavior<Element, unknown>;
    realContainer: d3.Selection<SVGGElement, any, HTMLElement, any>;
    container: d3.Selection<SVGGElement, any, HTMLElement, any>;
    nodes: Node<Record<any, any>>[];
    links: Link<Record<any, any>>[];
    x: number;
    y: number;
    width: number;
    height: number;
};
export declare const renderSimpleTreeTopo: <T>(container: d3.Selection<SVGSVGElement, any, HTMLElement, any>, data: TopoData, options?: Record<any, any>) => {
    zoom: d3.ZoomBehavior<Element, unknown>;
    chartContainer: d3.Selection<SVGGElement, any, HTMLElement, any>;
    nodes: Node<unknown>[];
    links: Link<Record<any, any>>[];
};
export { default as renderSimpleTreeTopoChart } from './simpleTopoChart';
export { default as renderTreeTopoChart } from './treeTopoChart';
export * as simpleTopoRender from "./simpleTopoRender";
export * as treeTopoRender from "./treeTopoRender";
