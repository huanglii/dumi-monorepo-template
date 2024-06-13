import { render } from '@testing-library/react';

import React from 'react';
import { describe, expect, test } from 'vitest';

export default function mountTest(Component: React.ComponentType) {
  describe('mount and unmount', () => {
    test(`component could be updated and unmounted without errors`, () => {
      const { unmount, rerender } = render(<Component />);
      expect(() => {
        rerender(<Component />);
        unmount();
      }).not.toThrow();
    });
  });
}
