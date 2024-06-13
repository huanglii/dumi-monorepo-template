import { render, screen } from '@testing-library/react';

import React from 'react';
import { describe, expect, test } from 'vitest';
import HelloWorld from '.';

describe('HelloWorld', () => {
  test('renders HelloWorld component', () => {
    render(<HelloWorld />);

    expect(screen.getByText('HelloWorld')).toBeDefined();
  });
});
