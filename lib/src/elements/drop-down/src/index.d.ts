/** @jsx jsx */
/// <reference types="react" />
/// <reference types="theme-ui" />
/// <reference types="@emotion/core" />
export interface DataProps {
    [key: string]: boolean | number | string | null;
}
interface Props<V = any> {
    dataProps?: DataProps;
    disabled?: boolean;
    freezable?: boolean;
    hasError?: boolean;
    onBlur: () => void;
    onChange: (value: V) => void;
    onFocus?: () => void;
    name: string;
    options: Option[];
    placeholder?: string;
    value: V;
}
export interface Option {
    value: string;
    text: string;
}
export declare type DropDownElement = Pick<HTMLSelectElement, 'focus' | 'scrollIntoView'>;
export declare const DropDown: import("react").ForwardRefExoticComponent<Props<any> & import("react").RefAttributes<Pick<HTMLSelectElement, "focus" | "scrollIntoView">>>;
export {};
