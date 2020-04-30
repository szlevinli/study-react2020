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

test('smoking test', () => {
  const { debug } = render(
    <MemoryRouter initialEntries={['/other']}>
      <Router routeObjects={mockRouteObjects}></Router>
    </MemoryRouter>
  );
  debug();
});
