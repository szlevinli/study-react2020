import React, { useContext } from 'react';
import { ThemeContext } from './theme-context';

const ThemedTogglerButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme} style={{ backgroundColor: theme.background }}>
      Toggle Theme
    </button>
  );
};

export default ThemedTogglerButton;
