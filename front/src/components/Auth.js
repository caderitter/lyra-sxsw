import React, { Component, useState } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

import { backendURL } from '../config';

export default class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = "loading";

    let params = new URLSearchParams(props.location.search);

    axios.post(`${backendURL}/auth`, {
      code: params.get("code")
    })
    .then(res => {
      const { cookies } = props;
      cookies.set('spotify_token', res.token);
      this.state = "done";
    })
    .catch(err => {
      console.log(err);
      this.state = "error";
    });
  }

  render() {
    switch(this.state) {
      case "loading":
        return <p>Loading...</p>
      case "done":
        return <Redirect to="/home" />
      case "error":
        return <p>There was an error.</p>
    }
  }
}
