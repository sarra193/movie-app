import React from 'react'
import MovieCard from '../MovieCard/MovieCard'
const MovieList = ({movies}) => {
      
      return (
      <div style={{display:'flex',flexWrap: 'wrap',justifyContent: 'space-evenly',gap:' 40px 30px'}}>
                  {
                  movies.map((movie, i) =>(
                  <MovieCard movies={movie} key={i}/>
                        ))
            
                  }
                  </div>
      )
}

export default MovieList