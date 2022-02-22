import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css';
import logo from '../img/tryst-logo.png'
const Header = () => {
    return (
        <div className='header-log'>
            <>
                <Navbar bg="dark" variant="dark">
                    <div className='logo'>
                        <img src={logo} alt="" srcSet="" className='img-fluid w-75 px-4' />
                    </div>
                    <Container>

                        <Nav className="me-auto nav-text ">

                            <div className='mx-3'>Menu</div>
                            <div className='mx-3'>SignUp</div>
                            <div className='mx-3'>LogIn</div>

                        </Nav>
                    </Container>
                </Navbar>
            </>
        </div>
    );
};

export default Header;