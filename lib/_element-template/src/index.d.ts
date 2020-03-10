/** @jsx jsx */
import * as React from 'react';
interface Props extends React.HTMLAttributes<HTMLDivElement> {
    someText: string;
}
declare const MyComponent: React.FC<Props>;
export default MyComponent;
