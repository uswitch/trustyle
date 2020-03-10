/** @jsx jsx */
import * as React from 'react';
interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    name: string;
    slim?: boolean;
}
export declare const CheckboxInput: React.FC<Props>;
export {};
