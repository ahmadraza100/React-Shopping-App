import React from 'react';
import { Link} from "react-router-dom";

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import FavoriteIcon from '@material-ui/icons/Favorite';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Container from '@material-ui/core/Container';

import "./../../App.css"

const Navv = () => {
  return (
    
    <Container>
      <Navbar bg="dark" variant="dark">
          <Link to="/" style={{textDecoration:"none"}}>
        <div className="nav">
          <div className="select">
            <AccountCircleIcon  className="items" />
            <FavoriteIcon className="items" />
            
          </div>
          <Navbar.Brand>
            <h1 style={{color:"black" , textDecoration:"none"}}>COSOO.</h1>
          </Navbar.Brand>
          <div>
            <SearchIcon  className="items"/>
            <ShoppingCartIcon  className="items"/>
          </div>

        </div>
          </Link>


        <Nav className="list">
          <Link className="li" to="/">Home</Link>
          <Link className="li" to="/about">About</Link>
          <Link className="li" to="/features">Features</Link>
          <Link className="li" to="/pages">Pages</Link>
          <Link className="li" to="/elements">Elements</Link>
          <Link className="li" to="/blogs">Blogs</Link>

        </Nav>

      </Navbar>
      </Container>

  );
}

export default Navv;
