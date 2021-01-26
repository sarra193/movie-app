import React from "react";
import { Form, Col, Row ,Button} from "react-bootstrap";
import './AddMovie.css'
const AddMovie = () =>
{
      return (

            
            <div className="float">
            <Form >
      <Form.Group as={Row} >
      <Form.Label column sm="2">
            Title
      </Form.Label>
      <Col sm="10">
            <Form.Control placeholder="Title"    />
      </Col>
      </Form.Group>

      <Form.Group as={Row} >
      <Form.Label column sm="2">
            Plot
      </Form.Label>
      <Col sm="10">
            <Form.Control type="password" placeholder="Plot" />
      </Col>
                  </Form.Group>
                  <Form.Group as={Row} >
      <Form.Label column sm="2">
            Poster URL
      </Form.Label>
      <Col sm="10">
            <Form.Control type="password" placeholder="PosterUrl" />
      </Col>
                  </Form.Group>
                  
                  <Form.Group as={Row} >
      <Form.Label column sm="2">
            Rate
      </Form.Label>
      <Col sm="10">
            <Form.Control type="password" placeholder="Rate" />
      </Col>
                        </Form.Group>
                        <Button variant="outline-success">Success</Button>{' '}
                  </Form>
                  </div>
      )
}

export default AddMovie