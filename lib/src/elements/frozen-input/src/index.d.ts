/** @jsx jsx */
/// <reference types="react" />
interface Props {
    text?: string;
    freezable?: boolean;
    inputRef?: React.RefObject<HTMLElement | HTMLElement>;
}
export declare const FrozenInput: React.FC<Props>;
export {};
