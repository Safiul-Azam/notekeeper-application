import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {

    return (
        <nav class="navbar navbar-light bg-light">
            <div class="container">
                <Link to='/' class="navbar-brand text-success fs-2">Note Keeper</Link>
                <Link to='/' className='text-success fs-3 text-decoration-none'>Home</Link>
                <div class="d-flex">
                        <Link to='/add-note' class="btn btn-success" type="submit">New Note</Link>
                </div>
            </div>
        </nav>
    );
};

export default Header;