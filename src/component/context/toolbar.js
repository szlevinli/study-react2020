import React from 'react';
import PropTypes from 'prop-types';
import ThemedButton from './themed-button';

const Toolbar = ({ changeTheme }) => {
  return <ThemedButton onClick={changeTheme}>Change Theme</ThemedButton>;
};

Toolbar.propTypes = {
  changeTheme: PropTypes.func.isRequired,
};

export default Toolbar;
