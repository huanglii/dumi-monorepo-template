import { HelloWorld } from '@nm/component';
import { Button } from 'antd';
import React, { FC } from 'react';

const Legend: FC = () => (
  <div>
    <HelloWorld />
    <Button>Antd Button</Button>
  </div>
);

export default Legend;
