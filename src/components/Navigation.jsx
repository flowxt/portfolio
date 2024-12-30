import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className='navigation bg-gradient-to-r from-zinc-700 to-zinc-900'>
            <ul>
                <NavLink to="/">
                <li className='gray-200'>Accueil</li>
                </NavLink>
                <NavLink to="/projets">
                <li className='gray-200'>Projets</li>
                </NavLink>
                {/* <NavLink to="/contact">
                <li className='gray-200'>Contact</li>
                </NavLink> */}
            </ul>
        </div>
    );
};

export default Navigation;