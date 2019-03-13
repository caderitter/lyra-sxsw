import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

import Post from './Post';

export default class Feed extends React.Component {
  render() {
    return (
      <ListGroup>
        <ListGroupItem>
          <Post />
        </ListGroupItem>
      </ListGroup>
    );
  }
}