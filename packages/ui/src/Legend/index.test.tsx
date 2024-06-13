import { render, screen } from '@testing-library/react';

import React from 'react';
import { describe, expect, test } from 'vitest';
import Legend from '.';

describe('Legend', () => {
  test('renders Legend component', () => {
    render(<Legend />);

    expect(screen.getByText('HelloWorld')).toBeDefined();
  });
});
