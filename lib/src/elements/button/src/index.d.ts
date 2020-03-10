/** @jsx jsx */
import * as React from 'react';
export declare type Variant = 'primary' | 'secondary' | 'continue';
declare type IconPosition = 'left' | 'center' | 'right' | null;
interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant: Variant;
    iconPosition?: IconPosition;
    inverse?: boolean;
    size?: string;
}
export declare const Button: React.FC<Props>;
export {};
