import React, { useState } from 'react';
import { CarFront, Menu, X } from 'lucide-react';

const Navbar = () => {
    const navigationData = [
        { id: 1, name: "Home", path: "/" },
        { id: 2, name: "About", path: "/about" },
        { id: 3, name: "Services", path: "/services" },
        { id: 4, name: "Contact", path: "/contact" }
    ];

    const [toggle, setToggle] = useState(true)
    return (
        <div>
            <nav className='flex justify-between'>
                <span className='flex gap-2' onClick={() => setToggle(!toggle)}>
                    {
                        toggle?<Menu/>: <X />
                    }
                    <h3>Mynav</h3>
                </span>
                <ul className='flex justify-center gap-20'>
                    {
                        navigationData.map(route =>
                            <li key={route.id}>
                                <a href={route.path} >{route.name}</a>
                            </li>
                        )
                    }
                </ul>
                <h3>Sign In</h3>
            </nav>
        </div>
    );
};

export default Navbar;