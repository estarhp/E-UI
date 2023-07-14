import axios, { AxiosResponse } from 'axios';
import classNames from 'classnames';
// @ts-ignore
import { Message, Progress } from 'e-ui';
import React, { forwardRef, useRef, useState } from 'react';
import './style/index.scss';

export interface UploadProps {
  children?: React.ReactNode;
  className?: string;
  action: string;
  handleResult: (result: void | AxiosResponse<any, any> | undefined) => void;
  showProgress?: boolean;
  showFileName?: boolean;
}

const Upload = forwardRef<HTMLDivElement, UploadProps>((props, ref) => {
  const {
    children,
    className,
    action,
    handleResult,
    showProgress = true,
    showFileName = true,
    ...resProps
  } = props;

  const classes = classNames('e-upload', className, {});
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploadProgress, setUploadProgress] = useState<number>(0);

  async function UploadFile(file: File) {
    if (file) {
      setUploadProgress(0);
      const formData = new FormData();
      formData.append('file', file);
      const result: void | AxiosResponse<any, any> = await axios({
        url: action,
        method: 'post',
        data: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        onUploadProgress: (progressEvent) => {
          const progress = Math.round(
            // @ts-ignore
            (progressEvent.loaded / progressEvent.total) * 100, //计算百分比
          );
          setUploadProgress(progress);
        }, //显示进度
      }).catch((error) => {
        Message({
          message: '上传失败：' + error,
          type: 'error',
        }); //Message 组件
      });

      if (handleResult) {
        handleResult(result);
      }
    }
  }

  async function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0]; //如果有选中文件，则返回文件列表中的第一个文件，否则返回 undefined。
    if (file) {
      setSelectedFile(file);
      await UploadFile(file);
    }
  }
  function handleUploadClick() {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  }

  const UploadTrigger = () => {
    return <div className="e-upload-default-trigger"></div>;
  };

  return (
    <div className={classes} {...resProps} ref={ref}>
      <div onClick={handleUploadClick} className="e-upload-trigger">
        {children || <UploadTrigger></UploadTrigger>}
      </div>
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
      <div
        style={{
          marginTop: 10,
          display: selectedFile ? 'inline-block' : 'none',
          width: '100%',
        }}
      >
        {showFileName && (
          <h6 style={{ margin: 5, whiteSpace: 'nowrap' }}>
            {selectedFile && selectedFile.name}
          </h6>
        )}
        {showProgress && (
          <Progress
            percentage={uploadProgress}
            showText={false}
            strokeWidth={0.1}
          ></Progress>
        )}
      </div>
    </div>
  );
});

export default Upload;
