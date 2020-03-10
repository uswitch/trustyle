/** @jsx jsx */
import React from 'react';
interface Props extends React.HTMLAttributes<HTMLDivElement> {
    index?: number;
    title: string;
    isInitiallyOpen?: boolean;
}
interface TitleProps extends React.HTMLAttributes<HTMLDivElement> {
    as?: React.ElementType;
}
declare const Accordion: React.FC<Props> & {
    Group: React.FC;
    Title: React.FC<TitleProps>;
};
export default Accordion;
