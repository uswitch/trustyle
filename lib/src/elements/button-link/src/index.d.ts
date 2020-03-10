/** @jsx jsx */
import * as React from 'react';
declare type Overwrite<T, U> = Omit<T, keyof U> & U;
export declare const ButtonLink: <T extends React.ComponentType<any> = React.ComponentType<React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>>>({ children, variant, ...props }: Overwrite<React.ComponentProps<T>, {
    as?: T | undefined;
    variant: string;
    children: React.ReactNode;
}>) => JSX.Element;
export {};
