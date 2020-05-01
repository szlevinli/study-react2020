/* eslint-disable jest/expect-expect */
import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ThemedButton from '../themed-button';

it('should render', () => {
  render(<ThemedButton onClick={jest.fn()}>Change Theme</ThemedButton>);
});

it('should be handled click event', () => {
  const mockFn = jest.fn();
  const { getByText } = render(
    <ThemedButton onClick={mockFn}>Change Theme</ThemedButton>
  );
  userEvent.click(getByText('Change Theme'));
  expect(mockFn).toHaveBeenCalledTimes(1);
});
