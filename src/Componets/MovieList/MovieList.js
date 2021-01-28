import React from 'react'
import MovieCard from '../MovieCard/MovieCard'
import './MovieList.css'

const MovieList = ({props, movies , filterByName}) => {
      
   
      
      return (
            

            
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly', gap: ' 40px 30px' }}>

                        {
                        filterByName.map((movie, i) =>(
                  <MovieCard {...movie} movies={movie} key={i}/>
                        ))
            
                  }
                  </div>
      )
}

export default MovieList