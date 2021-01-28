import "./App.css";
import React,{ useState } from "react";
import NavBar from './Componets/Header/NavBar/NavBar'
import Footer from './Componets/Footer/Footer'
import { Data } from './data'
import MovieList from './Componets/MovieList/MovieList'
import bg from './img/IoAdd.jpg'
import AddMovie from "./Componets/AddMovie/AddMovie";
function App() {


    const [add, setAdd] = useState(false)
    const [search, setSearch] = useState('')
  const [movies, setMovies] = useState(Data)
  

  
  /* Search by name function */
      const filterByName = Data.filter(movie => {
            return  movie.Title.toLowerCase().includes( search.toLowerCase())
      })

/* adding object to data */
  
  const addMovie = (movie) => {
    setMovies([...movies,movie])
  }



/* star rating function */
 
  return(
    <div style={{ backgroundImage: `url(${bg})` }}>
    <NavBar movies={Data} setSearch={setSearch} />
      <MovieList filterByName={filterByName} movies={Data} list={movies}  />

      <button className="btn" onClick={
          ()=> setAdd(!add)} >
        
          {add ? <div className="add-btn">-</div> :
            <div className="add-btn">+</div>
          }
      </button>
      
      {add && <AddMovie addMovie={ addMovie}/>}
    <Footer/>
    </div>
  )
}

export default App;
