import React from 'react';
import { Media } from 'reactstrap';

const axios = require('axios');
var _baseUri = 'https://api.spotify.com/v1';

{/* spotify:user:mollitha */}
{/* spotify:track:6PInkrdWpzFi6c4Ffrzs3q - Baybee by Jay Som*/}
{/* would need to get this data from the db */}

const Post = (props) => {

  let propic;
  let username;

  axios.get(`${_baseUri}/users/mollitha`)
  .then(res => {
    propic = res.images[0];
    username = res.display_name;
  })
  .catch(err => {
    console.log(err);
  })

  let spotifyObj;

  axios.get(`${_baseUri}/tracks/6PInkrdWpzFi6c4Ffrzs3q`)
  .then(res => {
    spotifyObj = res;
  })
  .catch(err => {
    console.log(err);
  })

  return (
    <Media>
      <Media left href="#">
        <Media object 
        	data-src = {propic} 
        	alt = "Generic placeholder image" 
    	/>
      </Media>
      <Media body>
        <Media heading>
          	{{username}} 
        </Media>
        <p>
        	{{spotifyObj}}
        </p> 
        <p>
        	"mmm love this groovy tune"
      	</p>
      </Media>
    </Media>
  );
};

export default Post;
