import React from 'react';
import { Link } from 'react-router';
import './Header.css'

const Header = () => {
    return (
        <div>
            <h2>This is header</h2>
            <nav>
                <Link to='/home'>Home</Link>
                <Link to='/mobiles'>Mobiles</Link>
                <Link to='/laptops'>Laptops</Link>
            </nav>
        </div>
    );
};

export default Header;