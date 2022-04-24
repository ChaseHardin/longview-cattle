import React from 'react';
import { Logo } from './logo-component';
import { Link } from 'gatsby';

import '../styles/navigation.css';

export const NavigationBar = () => {
    return (
        <div className='navigation-bar'>
            <Logo/>
            <div className='navigation-links'>
                <Link to='/'>Home</Link>
                <Link to='/bulls'>Bulls</Link>
                <Link to='/cows'>Cows</Link>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact</Link>
            </div>
        </div>
    )
};
