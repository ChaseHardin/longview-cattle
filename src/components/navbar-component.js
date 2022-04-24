import React from 'react';
import { Link } from 'gatsby';

import '../styles/navigation.css';

export const NavigationBar = () => {
    return (
        <div className='navigation-bar'>
            <div className='navigation-header'>Longview Farms</div>
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
