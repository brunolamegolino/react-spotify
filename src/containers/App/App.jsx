import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import './App.scss';

import Routes from '../../routes'

import { store, persistor } from '../../store';

const App = () => (
  <Provider store={store}>
      <div className="app" data-testid="app">
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </div>
  </Provider>
);

export default App;
