import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Link } from 'react-router-dom';

const Router = ({ routeObjects }) => {
  const links = routeObjects.map((route) => (
    <li key={route.pathName}>
      <Link to={route.pathName}>{route.displayName}</Link>
    </li>
  ));

  const routes = routeObjects.map((route) => (
    <Route path={route.pathName} key={route.pathName}>
      {route.routeComponent}
    </Route>
  ));

  return (
    <>
      <div>
        <nav>
          <ul>{links}</ul>
        </nav>
      </div>

      <Switch>{routes}</Switch>
    </>
  );
};

Router.propTypes = {
  routeObjects: PropTypes.arrayOf(
    PropTypes.shape({
      pathName: PropTypes.string.isRequired,
      displayName: PropTypes.string.isRequired,
      routeComponent: PropTypes.elementType.isRequired,
    })
  ),
};

export default Router;
