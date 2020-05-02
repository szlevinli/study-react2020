import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';

const RouteCompnent = ({ routeObjects }) => {
  const routes = routeObjects.map((route) => (
    <Route path={route.pathName} key={route.pathName}>
      {<route.routeComponent></route.routeComponent>}
    </Route>
  ));

  return <Switch>{routes}</Switch>;
};

RouteCompnent.propTypes = {
  routeObjects: PropTypes.arrayOf(
    PropTypes.shape({
      pathName: PropTypes.string.isRequired,
      displayName: PropTypes.string.isRequired,
      routeComponent: PropTypes.elementType.isRequired,
    })
  ),
};

export default RouteCompnent;
