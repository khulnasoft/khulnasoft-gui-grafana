import * as d3 from 'd3';
import { d3Selection, d3Transition, Point, CircleShape } from "../../../types";
export declare const drawCircle: (container: d3Selection, point: Point, circle: CircleShape, transition?: d3Transition | null, transitionFunc?: (a: d3Selection, b: CircleShape, c: Point) => (t: d3Transition) => d3Transition) => d3.Selection<d3.BaseType, any, d3.BaseType, any>;
export declare const defaultCircleTransition: (g: d3Selection, circle: CircleShape, point: Point) => (t: d3Transition) => d3.Transition<d3.BaseType, any, d3.BaseType, any>;
