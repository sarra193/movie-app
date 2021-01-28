import React,{useState} from "react";
import { Form, Col, Row ,Button} from "react-bootstrap";
import './AddMovie.css'
const AddMovie = (props,addMovie) =>
{

      const [newMovie, setNewMovie] = useState({
            Title: "",
            Plot: "",
            imbRating: "",
            date: '',
            posterUrl:""
      })

      const handleChange = (e) => {
            setNewMovie({...newMovie,[e.target.Title]:e.target.value})
      }

      return (

            
            <div className="float">
            <Form >
      <Form.Group as={Row} >
      <Form.Label column sm="2">
            Title
      </Form.Label>
      <Col sm="10">
            <Form.Control placeholder="Title" onChange={handleChange}   />
      </Col>
      </Form.Group>

      <Form.Group as={Row} >
      <Form.Label column sm="2">
            Plot
      </Form.Label>
      <Col sm="10">
            <Form.Control type="password" placeholder="Plot" onChange={handleChange} />
      </Col>
                  </Form.Group>
                  <Form.Group as={Row} >
      <Form.Label column sm="2">
            Poster URL
      </Form.Label>
      <Col sm="10">
            <Form.Control type="password" placeholder="PosterUrl"  onChange={handleChange}
/>
      </Col>
                  </Form.Group>
                  
                  <Form.Group as={Row} >
      <Form.Label column sm="2">
            Rate
      </Form.Label>
      <Col sm="10">
            <Form.Control type="password" placeholder="Rate" onChange={handleChange} />
      </Col>
                        </Form.Group>
                        <Button variant="outline-success" onClick={() => {
            addMovie(newMovie);
            setNewMovie({
            Title: "",
            Plot: "",
            imbRating: "",
            date: '',
            posterUrl:""
            });
            }}>Success</Button>
                  
                  </Form>
                  </div>
      )
}

export default AddMovie