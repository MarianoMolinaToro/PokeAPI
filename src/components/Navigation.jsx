import React from 'react'
import { Navbar } from "react-bootstrap";
import { useNavigate, NavLink } from 'react-router-dom';


const Navigation = () => {

  const activeClass = ({ isActive }) => (isActive ? 'active' : 'inactive');

  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/')
  }
  return (
    <Navbar className="navigation d-flex   justify-content-between p-3" > 
      <section>
        <Navbar.Brand
        className= "navIcon"
        onClick={handleClick}>
          <img src='https://cdn.pixabay.com/photo/2016/09/01/09/31/pokemon-1635610_1280.png' ></img>
        </Navbar.Brand>
      </section>
        <section className='navLinks'>
          <NavLink
          className={activeClass}
          to="/">
            Home
          </NavLink>
          <NavLink
          className={activeClass}
          to="/pokemons">
            Pokemons
          </NavLink>
        </section>
    </Navbar>

  )
}

export default Navigation;
