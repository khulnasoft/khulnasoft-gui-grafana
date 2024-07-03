import { d3Selection, Renderer } from '../types';
export declare class Element implements Renderer {
    ele: d3Selection;
    renderFunc: (...args: any[]) => d3Selection;
    setRenderFunc(renderFunc: (...args: any) => any, immediate?: Boolean): Element;
    on(event: string, func: () => any, name?: String): void;
    render(...args: any[]): d3Selection;
}
