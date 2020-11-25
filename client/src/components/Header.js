import React, {useEffect, useState} from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {getBooksDB} from '../utils/API';


export default function Header() {
    const handleSavedBooks = (e) => {
        getBooksDB()
        .then(res => console.log(res))
    }
    const handleBookSearch = (e) => {
        console.log("New book search")
    }
    return (
            <Navbar bg="primary" variant="dark">
                <Navbar.Brand href="#home">Google Book Search</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link onClick={handleSavedBooks}>Saved Books</Nav.Link>
                    <Nav.Link onClick={handleBookSearch}>Search New Books</Nav.Link>
                </Nav>
            </Navbar>
        )
}