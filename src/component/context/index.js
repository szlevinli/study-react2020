import React, { useState } from 'react';
import { ThemeContext, themes } from './theme-context';
import Toolbar from './toolbar';
import ThemedButton from './themed-button';

const ContextComponent = () => {
  const [theme, setTheme] = useState(themes.light);

  const toggleTheme = () => {
    setTheme(theme === themes.light ? themes.dark : themes.light);
  };

  return (
    <article>
      <h1>Context</h1>
      <ThemeContext.Provider value={theme}>
        <Toolbar changeTheme={toggleTheme}></Toolbar>
      </ThemeContext.Provider>
      <section>
        <ThemedButton>unchange theme</ThemedButton>
      </section>
    </article>
  );
};

export default ContextComponent;
