/** @jsx jsx */
import * as React from 'react';
interface Props extends React.HTMLAttributes<HTMLUListElement> {
    currentPage: number;
    totalPages: number;
    onPageChange?: (number: number, e?: React.MouseEvent) => any;
    numberToLink?: (number: number) => string;
}
declare const Pagination: React.FC<Props>;
export default Pagination;
