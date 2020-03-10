/** @jsx jsx */
import * as React from 'react';
declare type Type = 'notification' | 'alert';
export declare type ErrorMessages = string | {
    [index: string]: ErrorMessages;
};
interface Props {
    type: Type;
    children: React.ReactNode;
}
export declare const InputAlert: React.FC<Props>;
export {};
