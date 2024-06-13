# add

```jsx
import React, { useState } from 'react';
import { add } from '@nm/util';
import { Button } from 'antd';

export default () => {
  const [val, setVal] = useState(0);
  return (
    <div>
      <p>{val}</p>
      <Button onClick={() => setVal(add(val, 1))}>加 1</Button>
    </div>
  );
};
```
