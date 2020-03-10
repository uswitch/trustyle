import { SxStyleProp, Theme } from 'theme-ui';
interface InputTile {
    input: {
        tile: {
            inputColor: string;
        };
    };
}
export declare const input: (type: "checkbox" | "radio") => (theme: Theme & InputTile) => import("@styled-system/css").SystemStyleObject;
export declare const container: (type: "checkbox" | "radio") => () => import("@styled-system/css").SystemStyleObject;
export declare const content: SxStyleProp;
export declare const childrenWrapper: SxStyleProp;
export {};
