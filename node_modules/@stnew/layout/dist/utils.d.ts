import { ResponsiveProp, Value } from './types';
declare type Transformer = (prop: ResponsiveProp) => ResponsiveProp;
declare type TransformProp = (func: (value: Value) => Value) => Transformer;
export declare const trimUnit: (s: string) => string;
export declare const transformProp: TransformProp;
export declare const calcSpan: (columns: number) => Transformer;
export declare const calcGutter: (isRow: boolean) => Transformer;
export declare const calcRowGutter: Transformer;
export declare const calcColGutter: Transformer;
export declare const flexBasis: Transformer;
export declare const isReverse: (prop: import("styled-system").ResponsiveValue<import("styled-system").TLengthStyledSystem, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>>) => boolean;
export {};
//# sourceMappingURL=utils.d.ts.map