import { TreeNode } from "../../types";
export declare type StratifyFunction = {
    (...args: any): any;
    src?: Function;
    dst?: Function;
    roots?: Function;
    id?: Function;
};
export declare const getSimpleTree: () => StratifyFunction;
export declare const walkTreeData: (tree: TreeNode, func: Function) => void;
