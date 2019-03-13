import React, { useState } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

import { backendURL } from '../config';

const Auth = (props) => {
  const [state, setState] = useState("loading");


  axios.post(`${backendURL}/auth`, {
    code: props.match.params.code
  })
  .then(res => {
    const { cookies } = props;
    cookies.set('spotify_token', res.token);
    setState("done");
  })
  .catch(err => {
    console.log(err);
    setState("error");
  });

  switch(state) {
    case "loading":
      return <p>Loading...</p>
    case "done":
      return <Redirect to="/home" />
    case "error":
      return <p>There was an error.</p>
  }
  
}

export default Auth;