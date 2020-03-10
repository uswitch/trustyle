/** @jsx jsx */
import * as React from 'react';
interface ListLinkProps extends React.HTMLAttributes<HTMLDivElement> {
    title?: string;
}
export declare const LinkList: React.FC<ListLinkProps>;
interface ListLinkItemProps extends React.HTMLAttributes<HTMLDivElement> {
    href?: string;
}
export declare const LinkListItem: React.FC<ListLinkItemProps>;
export {};
