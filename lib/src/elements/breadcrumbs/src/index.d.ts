/** @jsx jsx */
import * as React from 'react';
interface Props extends React.HTMLAttributes<HTMLUListElement> {
    crumbs: {
        fields: any;
        [key: string]: any;
    }[];
    title?: string;
    customSeparator?: React.ReactNode | (() => React.ReactNode);
    customBackIcon?: React.ReactNode | (() => React.ReactNode);
    customHomeIcon?: React.ReactNode | (() => React.ReactNode);
    variant?: 'base' | 'light';
}
declare const Breadcrumbs: React.FC<Props>;
export default Breadcrumbs;
