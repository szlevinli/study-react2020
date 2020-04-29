import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

const Router = ({ routeObjects }) => {
  const links = routeObjects.map((route) => (
    <li key={route.pathName}>
      <Link to={route.pathName}>{route.displayName}</Link>
    </li>
  ));

  const routes = routeObjects.map((route) => (
    <Route path={route.pathName}>route.routeComponent</Route>
  ));

  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>{links}</ul>
        </nav>
      </div>

      <Switch>{routes}</Switch>
    </BrowserRouter>
  );
};

export default Router;
