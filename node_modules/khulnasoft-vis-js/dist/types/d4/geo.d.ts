import { Point } from '../types';
export declare class Geo {
    _scale: number;
    constructor();
}
interface rect {
    x?: number;
    y?: number;
    w: number;
    h: number;
    cx?: number;
    cy?: number;
    scale?: number;
}
export declare class Rect extends Geo {
    x: number;
    y: number;
    _w: number;
    _h: number;
    w: number;
    h: number;
    rx?: number;
    ry?: number;
    constructor(rect?: rect);
    get center(): Point;
    set center({ x, y }: Point);
    get tm(): {
        x: number;
        y: number;
    };
    get bm(): {
        x: number;
        y: number;
    };
    get lm(): {
        x: number;
        y: number;
    };
    get rm(): {
        x: number;
        y: number;
    };
    get scale(): number;
    resetSize(): void;
    get raw(): {
        x: number;
        y: number;
        w: number;
        h: number;
        scale: number;
        cx: number;
        cy: number;
    };
    set scale(n: number);
}
export {};
