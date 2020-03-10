/// <reference types="react" />
interface Props {
    checked: boolean;
    onChange?: (e: React.SyntheticEvent) => void;
    'aria-label'?: string;
    icons?: {
        checked: React.ReactNode;
        unchecked: React.ReactNode;
    };
}
declare const ToggleSwitch: React.FC<Props>;
export default ToggleSwitch;
