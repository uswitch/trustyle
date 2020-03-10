/** @jsx jsx */
import * as React from 'react';
interface Props extends React.HTMLAttributes<HTMLDivElement> {
    breadcrumbs?: React.ReactNode;
    container?: React.FC;
    contentWidth?: number;
    fgImage?: string;
    fgImagePosition?: {
        backgroundSize: (string | number)[] | string | number;
        backgroundPosition: (string | number)[] | string | number;
    };
    fgImageOnMobile?: boolean;
}
declare const Hero: React.FC<Props>;
export default Hero;
