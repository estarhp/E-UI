import { AxiosResponse } from 'axios';
import React from 'react';
import './style/index.scss';
export interface UploadProps {
    children?: React.ReactNode;
    className?: string;
    action: string;
    handleResult: (result: void | AxiosResponse<any, any> | undefined) => void;
    showProgress?: boolean;
    showFileName?: boolean;
}
declare const Upload: React.ForwardRefExoticComponent<UploadProps & React.RefAttributes<HTMLDivElement>>;
export default Upload;
