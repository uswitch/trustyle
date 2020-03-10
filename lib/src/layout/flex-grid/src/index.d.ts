/** @jsx jsx */
import * as React from 'react';
interface ContainerProps {
    children: any;
    className?: string;
    variant?: string;
}
export declare const Container: React.FC<ContainerProps>;
interface RowProps {
    children: any;
    cols?: any;
    direction?: any;
    className?: string;
    variant?: string;
}
export declare const Row: React.FC<RowProps>;
interface ColProps {
    children: any;
    cols?: number;
    className?: string;
    span?: any;
    sx?: any;
}
export declare const Col: React.FC<ColProps>;
export {};
