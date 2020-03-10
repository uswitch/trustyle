/** @jsx jsx */
import * as React from 'react';
import { Glyph } from '@uswitch/trustyle.icon';
interface Props extends React.HTMLAttributes<HTMLDivElement> {
    icon?: Glyph;
    title?: string;
    text: string;
}
declare const CallOut: React.FC<Props>;
export default CallOut;
