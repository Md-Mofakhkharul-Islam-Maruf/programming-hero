import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {

    const navigationData = [
        { id: 1, name: "Home", path: "/" },
        { id: 2, name: "About", path: "/about" },
        { id: 3, name: "Services", path: "/services" },
        { id: 4, name: "Contact", path: "/contact" }
    ];

    const link = navigationData.map(route => <li key={route.id}><a className='hover:bg-amber-700' href={route.path} >{route.name}</a></li>)

    const [toggle, setToggle] = useState(false)
    return (
        <div>
            <nav className='flex justify-between mx-5 mt-5'>
                <span className='flex gap-2' onClick={() => setToggle(!toggle)}>
                    {
                        toggle ?  <X /> :  <Menu />
                    }
                    <ul className={`md:hidden absolute bg-amber-300 duration-500 ${toggle? 'top-8':'-top-30'}`}>
                        {
                            link
                        }
                    </ul>
                    <h3>Mynav</h3>
                </span>
                <ul className='hidden md:flex justify-center gap-20'>
                    {
                        link
                    }
                </ul>
                <h3>Sign In</h3>
            </nav>
        </div>
    );
};

export default Navbar;