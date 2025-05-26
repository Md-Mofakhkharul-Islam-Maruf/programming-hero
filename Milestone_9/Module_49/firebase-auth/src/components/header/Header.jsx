import React from 'react';
import { NavLink } from 'react-router';

const Header = () => {
    return (
        <nav>
            <ul>
                <NavLink to="/home">Home</NavLink>
            </ul>
        </nav>
    );
};

export default Header;
