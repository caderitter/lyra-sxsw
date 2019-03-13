import React from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class CreatePost extends React.Component {
  render() {
    return (
      <Form>

        <FormGroup tag="fieldset" row>
          <legend className="col-form-label col-sm-2">Type of Post</legend>
          <Col sm={10}>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="radio2" />{' '}
                Song
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="radio2" />{' '}
                Playlist
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="radio2" />{' '}
                Album
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="radio2" />{' '}
                Artist
              </Label>
            </FormGroup>
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label for="exampleID" sm={2}>ID</Label>
          <Col sm={10}>
            <Input type="ID" name="ID" id="exampleID" placeholder="paste the Spotify ID here" />
          </Col>
        </FormGroup>
        
        <FormGroup row>
          <Label for="exampleText" sm={2}>Text Area</Label>
          <Col sm={10}>
            <Input type="textarea" name="text" id="exampleText" />
          </Col>
        </FormGroup>

        <FormGroup check row>
          <Col sm={{ size: 10, offset: 2 }}>
            <Button>Submit</Button>
          </Col>
        </FormGroup>
      </Form>
    );
  }
}