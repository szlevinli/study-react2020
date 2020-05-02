/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/expect-expect */
import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { mockRouteObjects } from '../mocks/mockObjects';
import LinkComponent from '../LinkComponent';

const MockComponent = () => (
  <MemoryRouter>
    <LinkComponent routeObjects={mockRouteObjects} />
  </MemoryRouter>
);

it.skip('should debug output', () => {
  const { debug } = render(<MockComponent />);
  debug();
});

it('should render 2 <li> elements', () => {
  const { getAllByRole } = render(<MockComponent />);
  const listItmes = getAllByRole('listitem');
  expect(listItmes.length).toBe(2);
  const links = getAllByRole('link');
  expect(links[0]).toHaveAttribute('href', '/other');
  expect(links[1]).toHaveAttribute('href', '/');
  expect(links[0]).toHaveTextContent('Other');
  expect(links[1]).toHaveTextContent('Home');
});
