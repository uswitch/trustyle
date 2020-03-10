/** @jsx jsx */
import * as React from 'react';
interface Phase {
    key: string;
    title: string;
}
interface Props extends React.HTMLAttributes<HTMLDivElement> {
    phases: Phase[];
    currentPhaseKey: string;
    progress: number;
}
declare const FunnelProgress: React.FC<Props>;
export default FunnelProgress;
