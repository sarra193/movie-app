import React, { useState}from 'react'
import {Navbar,Nav,FormControl,Form,Button} from 'react-bootstrap'
const NavBar = ({movies}) => {

      const [search, setSearch] = useState("");
      const [searchResults, setSearchResults] = useState([])
      const handeleChange = e => {
            setSearch(e.target.value);
      }
/*  React.useEffect(() => {
            const results = movies.filter(movie => movie.toLowerCase().includes(search));
            setSearchResults(results)
      }, [search]); */
      return (
            <Navbar bg="dark" variant="dark">
                              {console.log(movies)}

      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
      </Nav>
      <Form inline>
            <FormControl type="text" value={search} placeholder="Search" onChange={handeleChange} className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
                  </Form>
                  <ul>
                        {searchResults.map(item => (<li>{ item}</li>))}
                  </ul>
      </Navbar>
            
      )
}

export default NavBar