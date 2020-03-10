import * as colors from './colors';
import * as inputs from './inputs';
import * as typography from './typography';
import { breakpoints, Breakpoints, mq } from './media-queries';
declare const pxToRem: (...blocks: number[]) => string, spacers: {
    pink: 8;
    green: 12;
    purple: 16;
    teal: 24;
    blue: 32;
    orange: 48;
    red: 56;
    white: 64;
    turquoise: 72;
    aqua: 80;
    darkPink: 88;
};
declare const helpers: {
    insetBorder: (color: string) => string;
};
export { colors, helpers, inputs, pxToRem, spacers, typography, mq, breakpoints, Breakpoints };
