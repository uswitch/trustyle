/** @jsx jsx */
import * as React from 'react';
interface Link {
    text: string;
    url: string;
    isActive?: boolean;
}
interface LinkGroup {
    title: string;
    links: Link[];
}
interface Props extends React.HTMLAttributes<HTMLDivElement> {
    internalLinks: LinkGroup;
    additionalLinks?: LinkGroup[];
}
declare const SideNav: React.FC<Props>;
export default SideNav;
