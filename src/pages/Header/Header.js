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
                        <Navbar.Brand href="#home"><span><img src={logo} alt="" srcSet="" className='img-fluid w-75 px-4' /></span></Navbar.Brand>
                    </div>
                    <Container>

                        <Nav className="me-auto nav-text ">

                            <div><Nav.Link href="#home">Menu</Nav.Link></div>
                            <div><Nav.Link href="#features">SignUp</Nav.Link></div>
                            <div><Nav.Link href="#pricing">LogIn</Nav.Link></div>

                        </Nav>
                    </Container>
                </Navbar>
            </>
        </div>
    );
};

export default Header;