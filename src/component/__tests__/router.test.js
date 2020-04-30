import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Router from '../router';

const MockHome = () => (
  <div>
    <h1>Home</h1>
  </div>
);

const MockOther = () => (
  <div>
    <h1>Other</h1>
  </div>
);

const mockRouteObjects = [
  { pathName: '/other', displayName: 'Other', routeComponent: MockOther },
  { pathName: '/', displayName: 'Home', routeComponent: MockHome },
];

it('smoking test', () => {
  render(
    <MemoryRouter>
      <Router routeObjects={mockRouteObjects}></Router>
    </MemoryRouter>
  );
});

it('should render 2 <li> elements', () => {
  const { getAllByRole } = render(
    <MemoryRouter>
      <Router routeObjects={mockRouteObjects}></Router>
    </MemoryRouter>
  );
  expect(getAllByRole('listitem').length).toBe(2);
});

it('should render text "Home"', () => {
  const { getByRole } = render(
    <MemoryRouter>
      <Router routeObjects={mockRouteObjects}></Router>
    </MemoryRouter>
  );
  expect(getByRole('heading')).toHaveTextContent('Home');
});

it('should render text "Other"', () => {
  const { getByRole } = render(
    <MemoryRouter initialEntries={['/other']}>
      <Router routeObjects={mockRouteObjects}></Router>
    </MemoryRouter>
  );
  expect(getByRole('heading')).toHaveTextContent('Other');
});
