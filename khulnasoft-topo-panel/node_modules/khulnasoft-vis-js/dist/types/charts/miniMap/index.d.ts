import * as d3 from 'd3';
import { Node, Rect, Link } from "../../d4";
interface MiniRender {
    (a?: any): any;
    resize?: (a?: any) => any;
    enable?: () => void;
    disable?: () => void;
}
export declare const miniMap: <T>(nodes: any[], links: any[], svg: d3.Selection<SVGSVGElement, any, HTMLElement, any>, viewContainer: d3.Selection<SVGElement, any, HTMLElement, any>, zoom: d3.ZoomBehavior<Element, any>, options?: {
    getNodeRect?: (node: any) => Rect;
    nodeType?: 'circle' | 'rect';
    lineGenerator?: (link: any) => string;
    fromKey?: string;
    toKey?: string;
    scaleType?: 'max' | 'xy';
    getNodeColor?: (node: any) => string;
    getLinkColor?: (link: any) => string;
    disabled?: boolean;
}) => MiniRender;
export {};
