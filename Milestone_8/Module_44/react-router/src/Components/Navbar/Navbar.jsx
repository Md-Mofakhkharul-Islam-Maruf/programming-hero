import React from 'react';
import { CarFront } from 'lucide-react';

const Navbar = () => {
    const navigationData = [
        { id: 1, name: "Home", path: "/" },
        { id: 2, name: "About", path: "/about" },
        { id: 3, name: "Services", path: "/services" },
        { id: 4, name: "Contact", path: "/contact" }
    ];
    return (
        <div>
            <ul className='flex justify-center gap-20'>
                {
                    navigationData.map(route =>
                        <li key={route.id}>
                            <a href={route.path} >{route.name}</a>
                        </li>
                    )
                }
            </ul>
            <div>
                {/* <CarFront /> */}
            </div>
        </div>
    );
};

export default Navbar;