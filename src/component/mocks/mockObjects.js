import React from 'react';

export const MockHome = () => (
  <div>
    <h1>Home</h1>
  </div>
);

export const MockOther = () => (
  <div>
    <h1>Other</h1>
  </div>
);

export const mockRouteObjects = [
  { pathName: '/other', displayName: 'Other', routeComponent: MockOther },
  { pathName: '/', displayName: 'Home', routeComponent: MockHome },
];
