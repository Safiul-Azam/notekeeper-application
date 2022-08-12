import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {

    return (
        <nav class="navbar navbar-light bg-light">
            <div class="container">
                <Link to='/' class="navbar-brand text-success"><h4 className=' fs-1'>Note Keeper</h4></Link>
                <Link to='/' className='text-success fs-5 text-decoration-none'>Home</Link>
                <div class="d-flex">
                        <Link to='/add-note' class="btn btn-success" type="submit"><h4 className='fs-5'>Take a note</h4></Link>
                </div>
            </div>
        </nav>
    );
};

export default Header;