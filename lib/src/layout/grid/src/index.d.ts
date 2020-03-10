/** @jsx jsx */
import * as React from 'react';
import { Breakpoints } from '@uswitch/trustyle.styles';
interface Props {
    children: any;
    outerMargin?: string[];
    containerWidths?: (string | number)[];
    gutterWidths?: number[];
}
export declare const Container: React.FC<Props>;
interface ColumnProps extends Breakpoints {
    children: any;
    hasPaddingTop?: boolean;
    hasPaddingBottom?: boolean;
    gutterWidths?: number[];
}
export declare const Column: React.FC<ColumnProps>;
interface RowProps {
    children: any;
    centerX?: boolean;
    topSpacing?: number[];
    bottomSpacing?: number[];
    gutterWidths?: number[];
}
export declare const Row: React.FC<RowProps>;
export {};
