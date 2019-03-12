import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import SpotifyLoginButton from './components/SpotifyLoginButton';

const App = () => {
  return (
    <Router>
      <div>
        <SpotifyLoginButton />
        <Route path="/auth" />
      </div>
    </Router>
  );
}

export default App
