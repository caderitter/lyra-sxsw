import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';

import SpotifyLoginButton from './components/SpotifyLoginButton';
import Auth from './components/Auth';
import Login from './components/Login';

const App = () => {
  return (
    <CookiesProvider>
      <Router>
        <div>
          <Route path="/auth" component={Auth} /> 
          <Route path="/home" />
          <Route path="/login" component={Login} />
        </div>
      </Router>
    </CookiesProvider> 
  );
}

export default App;
