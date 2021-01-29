import React,{useState} from 'react'
import {Card , ListGroup,ListGroupItem} from 'react-bootstrap'
import Rate from '../Header/Rate/Rate'
const MovieCard = ({ movies }) => {
      
            const [rating] = useState( movies.imdbRating)

     
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
            <ListGroupItem  readOnly = {true} disabled={true} >
            <Rate 
            count={5}
            size={40}
            value={rating}
            activeColor ={'red'}
            inactiveColor={'black'}/>
            </ListGroupItem>
      </ListGroup>
      </Card>
            )
}

export default MovieCard