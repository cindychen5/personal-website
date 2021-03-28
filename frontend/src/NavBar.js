import React from "react";
import {Navbar, Nav} from "react-bootstrap";

export const NavBar = () => {
    return (
        <>
            <Navbar bg="light" expand="lg" className="border border-dark">
                <Navbar.Brand href="/">CINDY CHEN</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav.Link href="/">Portfolio</Nav.Link>
                    <Nav.Link href="/">Resume</Nav.Link>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}