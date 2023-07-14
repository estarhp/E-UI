import React from 'react';
import './style/index.scss';
interface ProgressProps {
    type?: string;
    percentage: number;
    textInside?: boolean;
    strokeWidth?: number;
    showText?: boolean;
}
declare const Progress: React.ForwardRefExoticComponent<ProgressProps & React.RefAttributes<HTMLInputElement>>;
export default Progress;
