/** @jsx jsx */
import * as React from 'react';
interface ListProps extends React.HTMLAttributes<HTMLDivElement> {
    title: string;
    text?: string;
    container?: React.FC;
}
declare const Category: React.FC<ListProps>;
export default Category;
