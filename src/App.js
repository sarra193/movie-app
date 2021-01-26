import "./App.css";
import React,{ useState } from "react";
import NavBar from './Componets/Header/NavBar/NavBar'
import Footer from './Componets/Footer/Footer'
import { Data } from './data'
import MovieList from './Componets/MovieList/MovieList'
import bg from './img/IoAdd.jpg'
import AddMovie from "./Componets/Header/AddMovie/AddMovie";
import Popup from 'reactjs-popup';
function App() {
const [add, setAdd] = useState(false)

  return(
    <div style={{ backgroundImage: `url(${bg})` }}>
    <NavBar movie={Data} />
      <MovieList movies={Data} />

      <button className="btn" onClick={
          ()=> setAdd(!add)} >
        
          {add ? <div className="add-btn">-</div> :
            <div className="add-btn">+</div>
          }
      </button>
      
      {add && <AddMovie/>}
    <Footer/>
    </div>
  )
}

export default App;
