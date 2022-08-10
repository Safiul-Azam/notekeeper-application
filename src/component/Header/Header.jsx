import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'


const Header = () => {
    
    return (
        <div className='header-container'>
            <div className='logo'>
                <Link to='/'>Note Keeper</Link>
            </div>
            <div className='add-note-btn'>
                <Link to='/add-note' >New Note</Link>
            </div>
        </div>
    );
};

export default Header;