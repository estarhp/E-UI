---
nav:
  title: components
  path: /components
---

# Upload

```tsx
import { Upload,Message } from 'thy-ui';
function handleResult (result){
  Message({
    message:result.data.message,
    type:"info",
    duration:5000
  })
}
function handleError(error){
  Message({
    message:error,
    type:"error",
    duration:5000
  })
}
export default () => {
  return (
    <div style={{ width: 200, height: 200 }}>
      <Upload action="http://8.130.101.163:8000/api/noVerifyUpload" handleResult={handleResult} handleError={handleError}></Upload>
    </div>
  );
};
```

| 参数                 | 说明                                       | 类型     | 可选值 | 默认值 |
| -------------------- | ------------------------------------------ | -------- | ------ | ------ |
| className            | 自定义类名                                 | string   | ---    | ---    |
| handleResult(result) | 上传成功后对结果的回调,参数为请求的 result | Function | ---    | ---    |
| action               | 上传的网络接口                             | string   | ---    | ---    |
| showProgress         | 是否显示进度条                             | boolean  | ---    | true   |
| showFileName         | 是否显示文件名                             | boolean  | ---    | true   |
