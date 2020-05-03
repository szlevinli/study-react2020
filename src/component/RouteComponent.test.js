/* eslint-disable react/prop-types */
/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/expect-expect */
import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { mockRouteObjects } from './mocks/mockObjects';
import RouteCompnent from './RouteCompnent';

const MockComponent = ({ initEntry }) => (
  <MemoryRouter initialEntries={initEntry}>
    <RouteCompnent routeObjects={mockRouteObjects} />
  </MemoryRouter>
);

it.skip('should debug output', () => {
  const { debug } = render(<MockComponent initEntry={['/']} />);
  debug();
});

it('should render text "Home"', () => {
  const { getByRole } = render(<MockComponent initEntry={['/']} />);
  expect(getByRole('heading')).toHaveTextContent('Home');
});

it('should render text "Other"', () => {
  const { getByRole } = render(<MockComponent initEntry={['/other']} />);
  expect(getByRole('heading')).toHaveTextContent('Other');
});
