import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Navbar, Container } from 'react-bootstrap';


const Header = () => {

    return (
        <nav class="navbar navbar-light bg-light">
            <div class="container">
                <Link to='/' class="navbar-brand text-danger">Note Keeper</Link>
                <div class="d-flex">
                        <Link to='/add-note' class="btn btn-outline-success" type="submit">New Note</Link>
                </div>
            </div>
        </nav>
    );
};

export default Header;