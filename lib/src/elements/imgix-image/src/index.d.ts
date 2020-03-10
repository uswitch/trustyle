/** @jsx jsx */
import * as React from 'react';
import { SharedImigixAndSourceProps } from 'react-imgix';
interface Props extends SharedImigixAndSourceProps {
    alt?: string;
    critical?: boolean;
    className?: string;
}
export declare const ImgixImage: React.NamedExoticComponent<Props>;
export {};
