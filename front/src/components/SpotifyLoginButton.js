import React from 'react';
import { Button } from 'reactstrap';

import { clientID, redirectURI } from '../config';

const uri = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=code&redirect_uri=${redirectURI}&scope=user-read-private`;

export default () => {
  return (
    <Button color="success" onClick={() => window.location.href = uri }>
      Log in with Spotify
    </Button>
  )
}