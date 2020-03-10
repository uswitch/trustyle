/** @jsx jsx */
/// <reference types="react" />
interface ModalProps {
    ariaLabel: string;
    children: React.ReactNode;
    disableScrolling: boolean;
    side: 'left' | 'right';
    triggerElement: React.ReactElement;
}
export declare const Drawer: React.FC<ModalProps>;
export {};
