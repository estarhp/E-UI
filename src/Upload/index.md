---
nav:
  title: components
  path: /components
---

# Upload

```tsx
import { Upload } from 'e-ui';

export default () => {
  return (
    <div style={{ width: 200, height: 200 }}>
      <Upload action="http://8.130.101.163:8000/api/noVerifyUpload"></Upload>
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
