/** @jsx jsx */
import * as React from 'react';
interface ListProps extends React.OlHTMLAttributes<HTMLUListElement> {
    listType?: 'numeric' | 'bullet';
}
export declare const List: React.FC<ListProps>;
interface ListItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
    listType?: 'numeric' | 'bullet';
}
export declare const ListItem: React.FC<ListItemProps>;
export {};
