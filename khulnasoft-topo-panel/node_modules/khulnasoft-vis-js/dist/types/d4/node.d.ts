import { Shape } from './shape';
import { Rect } from './geo';
import { d3Selection } from '../types';
import { Link } from './link';
export declare class Node<T> extends Shape {
    rect: Rect;
    links: Set<Link<T>>;
    data: any | T;
    props: Record<string, any>;
    refs: Record<string, d3.Selection<any, any, any, any>>;
    constructor(container: d3Selection, rect: Rect);
    get scale(): number;
    set scale(n: number);
    addLink(link: Link<T>): void;
    removeLink(link: Link<T>): void;
}
