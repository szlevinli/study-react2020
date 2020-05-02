import React from 'react';
import './App.css';
import LinkComponent from './component/LinkComponent';
import RouteCompnent from './component/RouteCompnent';
import routers from './component/routers';

import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <header>
          <LinkComponent routeObjects={routers}></LinkComponent>
        </header>
        <section>
          <RouteCompnent routeObjects={routers}></RouteCompnent>
        </section>
      </BrowserRouter>
      <footer>Footer</footer>
    </div>
  );
}

export default App;
