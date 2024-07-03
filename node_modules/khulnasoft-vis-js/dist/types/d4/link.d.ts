import { Shape } from './shape';
import { Node } from './node';
import { d3Selection } from '../types';
export declare class Link<T> extends Shape {
    _from: Node<T> | null;
    _to: Node<T> | null;
    data: any | T;
    props: Record<string, any>;
    refs: Record<string, d3.Selection<any, any, any, any>>;
    constructor(container: d3Selection);
    set from(point: Node<T>);
    get from(): Node<T>;
    set to(point: Node<T>);
    get to(): Node<T>;
}
