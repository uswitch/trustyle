/** @jsx jsx */
import * as React from 'react';
export declare type Glyph = 'arrow' | 'caret' | 'check' | 'close' | 'edit' | 'email' | 'filters' | 'home' | 'letter' | 'phone' | 'plus' | 'sms';
export declare type Direction = 'up' | 'down' | 'left' | 'right';
interface Props {
    color: string;
    direction?: Direction;
    glyph: Glyph;
    size?: number;
}
export declare const Icon: React.FC<Props>;
export {};
