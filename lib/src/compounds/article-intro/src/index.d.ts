/** @jsx jsx */
import * as React from 'react';
interface Props extends React.HTMLAttributes<HTMLDivElement> {
    title: string;
    author: React.ReactNode;
    description: string;
}
declare const ArticleIntro: React.FC<Props>;
export default ArticleIntro;
