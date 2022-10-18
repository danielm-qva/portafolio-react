
import React from 'react'

import Navbar from 'react-bootstrap/Navbar';
import { Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';

import {useDispatch , useSelector} from 'react-redux'

import './navbar.css'
import { logout } from '../../store/slices/Loginapp/loginSlice';

function NavBarApp({name}) {
    
    const {statusLogin} = useSelector((state) => state.loginApp)
    const dispatch = useDispatch();

  
    const handlelogout = () => {
      dispatch(logout())
    }
    
  return (
<Navbar bg="dark" variant="dark" >
<Container>
  <Navbar.Brand href="/home">
    <img
      alt=""
      src="./../../../public/logo.svg"
      width="30"
      height="30"
      className="d-inline-block align-top"
    />
    {name}
  </Navbar.Brand>
      <Nav>
            <Nav.Link href="/home">
              <ion-icon className="icon" name="home-outline"></ion-icon>Home
              </Nav.Link>
            <Nav.Link href="/about"><ion-icon name="planet-sharp"></ion-icon>About</Nav.Link>
            <Nav.Link disabled={true} href="/work"><ion-icon name="code-working-sharp"></ion-icon>
                 Work
            </Nav.Link>
           {
              statusLogin ?  <Nav.Link  onClick={handlelogout}><ion-icon name="person-circle-outline"></ion-icon>Logout</Nav.Link> : ""
           }
          </Nav>
</Container>
</Navbar>
  )
}

export default NavBarApp;