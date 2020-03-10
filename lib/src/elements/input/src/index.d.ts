/** @jsx jsx */
/// <reference types="react" />
export declare type InputType = 'text' | 'email' | 'tel' | 'password';
export declare type Width = 'half' | 'full';
export interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    defaultValue?: string | undefined;
    freezable?: boolean;
    hasError?: boolean;
    mask?: string;
    name: string;
    postprocess?: (x: string) => string;
    prefix?: string;
    suffix?: string;
    type: InputType;
    value?: string | undefined;
    width?: Width;
}
export declare const Input: React.FC<Props>;
