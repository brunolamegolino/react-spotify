import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.scss';

import Routes from '../../routes'

const App = () => (
    <div className="app" data-testid="app">
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
    </div>
);

export default App;
