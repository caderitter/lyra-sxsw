import React from 'react';
import { Media } from 'reactstrap';

const axios = require('axios');
var _baseUri = 'https://api.spotify.com/v1';
var _baseUriEmbed = 'https://open.spotify.com/embed/';

{/* spotify:user:mollitha */}
{/* spotify:track:6PInkrdWpzFi6c4Ffrzs3q - Baybee by Jay Som*/}
{/* would need to get this data from the db */}

let type = "track";
let id = "6PInkrdWpzFi6c4Ffrzs3q";
let username = "mollitha"

const Post = (props) => {

  let propic;
  let username;

  axios.get(`${_baseUri}/users/${username}`)
  .then(res => {
    propic = res.images[0];
    displayname = res.display_name;
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
          	{{displayname}} 
        </Media>
        <p>
          {{spotifyObj}}
          <iframe 
            src={_baseUriEmbed + "/" + type + "/" + id}
            width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media">
          </iframe>
        </p> 
        <p>
        	"mmm love this groovy tune"
      	</p>
      </Media>
    </Media>
  );
};

export default Post;
