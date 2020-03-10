/** @jsx jsx */
import * as React from 'react';
interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    name: string;
}
export declare const RadioInput: React.FC<Props>;
export {};
