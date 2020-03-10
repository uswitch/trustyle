/** @jsx jsx */
import * as React from 'react';
interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    children: React.ReactNode;
    label: string;
    name: string;
    type?: 'radio' | 'checkbox';
}
export declare const TileInput: React.FC<Props>;
export {};
