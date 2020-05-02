import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const LinkComponent = ({ routeObjects }) => {
  const links = routeObjects.map((route) => (
    <li key={route.pathName}>
      <Link to={route.pathName}>{route.displayName}</Link>
    </li>
  ));

  return (
    <div>
      <nav>
        <ul>{links}</ul>
      </nav>
    </div>
  );
};

LinkComponent.propTypes = {
  routeObjects: PropTypes.arrayOf(
    PropTypes.shape({
      pathName: PropTypes.string.isRequired,
      displayName: PropTypes.string.isRequired,
      routeComponent: PropTypes.elementType.isRequired,
    })
  ),
};

export default LinkComponent;
