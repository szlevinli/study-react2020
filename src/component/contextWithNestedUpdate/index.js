import React, { useState } from 'react';
import { ThemeContext, themes } from './theme-context';
import ThemedTogglerButton from './themed-toggler-button';

const ContextWithNestedUpdateComponent = () => {
  const [theme, setTheme] = useState(themes.light);

  const toggleTheme = () => {
    setTheme(theme === themes.light ? themes.dark : themes.light);
  };

  return (
    <article>
      <h1>Context</h1>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <ThemedTogglerButton />
      </ThemeContext.Provider>
    </article>
  );
};

export default ContextWithNestedUpdateComponent;
