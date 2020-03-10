/** @jsx jsx */
import * as React from 'react';
interface Props {
    imgSrc: string;
    imgAlt: string;
    title: string;
    description: string;
    linkHref: string;
    linkText?: string;
    className?: string;
}
declare const Card: React.FC<Props>;
export default Card;
