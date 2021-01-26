import React from 'react'
import {Card , ListGroup,ListGroupItem} from 'react-bootstrap'

const MovieCard =({movies})=>{

      return (
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={movies.Poster} />
      <Card.Body>
      <Card.Title>{ movies.Title}</Card.Title>
      <Card.Text>
            {movies.Plot}
      </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
      <ListGroupItem>{ movies.imdbRating}</ListGroupItem>
      </ListGroup>
      </Card>
            )
}

export default MovieCard