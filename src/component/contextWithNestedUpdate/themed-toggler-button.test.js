import { render } from '@testing-library/react';
import React from 'react';
import { ThemeContext, themes } from './theme-context';
import ThemedTogglerButton from './themed-toggler-button';
import userEvent from '@testing-library/user-event';

// eslint-disable-next-line react/prop-types
const MockComponent = ({ contextValue }) => {
  return (
    <ThemeContext.Provider value={contextValue}>
      <ThemedTogglerButton></ThemedTogglerButton>
    </ThemeContext.Provider>
  );
};

it('should be render correctly', () => {
  const { container } = render(
    <MockComponent
      contextValue={{
        theme: themes.light,
        toggleTheme: jest.fn(),
      }}
    ></MockComponent>
  );
  expect(container).toMatchSnapshot();
});

it('should be render a button', () => {
  const { getByRole } = render(
    <MockComponent
      contextValue={{
        theme: themes.light,
        toggleTheme: jest.fn(),
      }}
    ></MockComponent>
  );
  expect(getByRole('button')).toHaveTextContent('Toggle Theme');
  expect(getByRole('button')).toHaveAttribute(
    'style',
    expect.stringContaining('background-color')
  );
});

it('should be handle click', () => {
  const mockFn = jest.fn();
  const { getByRole } = render(
    <MockComponent
      contextValue={{
        theme: themes.light,
        toggleTheme: mockFn,
      }}
    ></MockComponent>
  );
  userEvent.click(getByRole('button'));
  expect(mockFn).toHaveBeenCalledTimes(1);
});
