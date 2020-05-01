import React from 'react';
import './App.css';
import Router from './component/Router';
import routers from './component/routers';

import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <header>
        <BrowserRouter>
          <Router routeObjects={routers}></Router>
        </BrowserRouter>
      </header>
      <section>Section</section>
      <footer>Footer</footer>
    </div>
  );
}

export default App;
