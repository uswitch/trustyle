/** @jsx jsx */
import * as React from 'react';
interface Props extends React.HTMLAttributes<HTMLDivElement> {
    name: string;
    role: string;
    editorName?: string;
    editorRole?: string;
    authorImage?: React.ReactElement;
    date: number;
    authorUrl: string;
    editorUrl: string;
}
declare const Author: React.FC<Props>;
export default Author;
