/** @jsx jsx */
import * as React from 'react';
interface Props {
    source: string;
    allowFullScreen?: boolean;
    hasAccordion?: boolean;
    accordionTitle?: string;
    accordionContent?: string;
}
declare const EmbeddedVideo: React.FC<Props>;
export default EmbeddedVideo;
