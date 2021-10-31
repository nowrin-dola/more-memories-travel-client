import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../Hooks/useAuth';
import logo from '../../logo.png';

import './Menubar.css';

const Menubar = () => {
    const{user,logOut } = useAuth();
    return (
        <>
            <Navbar collapseOnSelect expand="lg" className='color-nav' variant="dark" sticky="top">
                <Container>
                    <Navbar.Brand className='text-warning' href="#home">
                    <img
                            alt=""
                            src={logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />  More Memories Travel
                        
                        </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end ">
                        <Nav.Link as={HashLink} to="/home#home"><span className='text-white'>Home</span></Nav.Link>
                        <Nav.Link as={HashLink} to="/home#tourPlans"><span className='text-white'>Destinations</span></Nav.Link>
                        <Nav.Link as={HashLink} to="/home#about"><span className='text-white'>About</span></Nav.Link>
                        {user.displayName ? <Nav.Link as={Link} to="/">
                       <NavDropdown
                                id="nav-dropdown"
                                title="Dashboard"
                                menuVariant="dark"
                        >
                            
                            <NavDropdown.Item as={HashLink} to="/myOrders">My Tours</NavDropdown.Item>
                            <NavDropdown.Item as={HashLink} to="/manageOrders">Manage All Tours</NavDropdown.Item>
                            <NavDropdown.Item as={HashLink} to="/addTours">Add a New Tour</NavDropdown.Item> 
                                        

                        </NavDropdown>
                        </Nav.Link> : ""}
                        { user?.displayName ?
                        <button onClick={logOut} >Logout </button> :
                        <Nav.Link as={Link} to="/login"><span className='text-white'>Login</span></Nav.Link>


                               }           
                        <Navbar.Text>
                            Signed in as: <a href="#login"> {user?.displayName} </a>
                        </Navbar.Text>
                    </Navbar.Collapse>

                </Container>
            </Navbar>



        </>
    );
};

export default Menubar;