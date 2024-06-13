# add

```jsx
import React, { useState } from 'react';
import { sum } from '@nm/util';
import { Button } from 'antd';

export default () => {
  const [val, setVal] = useState(0);
  return (
    <div>
      <p>{val}</p>
      <Button onClick={() => setVal(sum(val, 1))}>加 1</Button>
    </div>
  );
};
```
