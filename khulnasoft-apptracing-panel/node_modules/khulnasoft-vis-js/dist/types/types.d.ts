import * as d3 from 'd3';
export declare type d3Selection = d3.Selection<d3.BaseType, any, d3.BaseType, any>;
export declare type d3Transition = d3.Transition<d3.BaseType, any, d3.BaseType, any>;
export interface Point {
    x: number;
    y: number;
}
export interface Renderer {
    render: () => d3Selection;
    reRender?: () => d3Selection;
}
export interface TopoData {
    nodes: Record<any, any>[];
    links: Record<any, any>[];
}
export interface TimeRange {
    start_time_us: number;
    end_time_us: number;
}
export interface L7Trace extends TimeRange, Record<string, any> {
    tap_side: string;
}
export interface RectShape {
    w: number;
    h: number;
    rx?: number;
    ry?: number;
    x?: number;
    y?: number;
}
export interface CircleShape {
    r: number;
    ir?: number;
    startAngle?: number;
    endAngle?: number;
    cx?: number;
    cy?: number;
}
export interface TreeNode extends Record<string | number, any> {
    id: string | number;
    children?: TreeNode[];
    parent?: TreeNode;
    depth: number;
}
export declare type ArrayElement<T> = T extends Array<infer I> ? I : T;
export declare type DF_METRIC_RESULT = Record<string, number>;
export interface DF_API_HISTORY extends Record<string, any> {
    FULL_NAME?: string;
    NAME?: string;
    UID?: string;
    ID?: string | number;
    HISTORY: DF_METRIC_RESULT[];
}
