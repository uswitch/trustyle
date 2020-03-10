/** @jsx jsx */
import * as React from 'react';
interface CTAProps extends React.HTMLAttributes<HTMLDivElement> {
    title: string;
    text: string;
    buttonLink: string;
    buttonText: string;
    variant?: 'base' | 'hero' | 'hero-white-bg';
}
declare const CTA: React.FC<CTAProps>;
export default CTA;
