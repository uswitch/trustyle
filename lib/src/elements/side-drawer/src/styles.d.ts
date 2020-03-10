import { SerializedStyles } from '@emotion/core';
export declare const transitionDuration = 400;
export declare const background: SerializedStyles;
interface TransitionStates {
    entering: SerializedStyles;
    entered: SerializedStyles;
    exiting: SerializedStyles;
    exited: SerializedStyles;
    unmounted: SerializedStyles;
}
export declare const transitionPositions: {
    left: TransitionStates;
    right: TransitionStates;
};
export declare const drawer: SerializedStyles;
export declare const closeRow: SerializedStyles;
export declare const closeBtn: SerializedStyles;
export declare const drawerBody: SerializedStyles;
export {};
