import React from 'react';
import { Navbar, Container, Nav, Form, FormControl, Button } from 'react-bootstrap';
import HamburgerMenu from './NavBar/HamburgerMenu';
import SearchBar from './NavBar/SearchBar'

export default function NavBar() {
    return (
        <>
            <Navbar bg="light" expand={false}>
                <Container fluid>
                    <div id="navBar">
                        <div>
                            <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand>
                            <HamburgerMenu />
                        </div>

                        <SearchBar />
                        <Nav.Link href="/Login">Login</Nav.Link>
                    </div>

                </Container>
            </Navbar>

        </>
    );
}