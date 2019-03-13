import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import SpotifyLoginButton from './SpotifyLoginButton';

const Login = (props) => {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">Welcome to Lyra!</h1>
        <p className="lead">Lyra is where fans and artists can share and discover new music.</p>
        <hr className="my-2" />
        <p>Login using your Spotify account</p>
        <p className="lead">
        <SpotifyLoginButton />
        </p>
      </Jumbotron>
    </div>
  );
};

export default Login;
