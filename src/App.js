import React from 'react';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Register from './pages/Register';

import './assets/styles/global.css'
import Routes from './routes';

import { Provider } from 'react-redux';

import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider >
  );
}

export default App;
