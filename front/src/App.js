import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';

import SpotifyLoginButton from './components/SpotifyLoginButton';
import Auth from './components/Auth';

const App = () => {
  return (
    <CookiesProvider>
      <Router>
        <div>
          <SpotifyLoginButton />
          <Route path="/auth" component={Auth} /> 
          <Route path="/home" />
        </div>
      </Router>
    </CookiesProvider>
  );
}

export default App;
