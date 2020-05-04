import { render } from '@testing-library/react';
import React from 'react';
import ThemedTogglerButton from './index';
import userEvent from '@testing-library/user-event';

it('should be render ThemedTogglerButton correctly', () => {
  const { container } = render(<ThemedTogglerButton />);
  expect(container).toMatchSnapshot();
});

it('should be toggle theme', () => {
  const { getByRole } = render(<ThemedTogglerButton />);
  const button = getByRole('button');
  expect(button).toHaveAttribute('style', expect.stringContaining('238'));
  userEvent.click(button);
  expect(button).toHaveAttribute('style', expect.stringContaining('34'));
});
