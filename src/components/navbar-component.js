import React from 'react';
import { Logo } from './logo-component';
import { Link } from 'gatsby';

import '../styles/navigation.css';

export const NavigationBar = () => {
    return (
        <div className='navigation-bar'>
            <Logo/>
            <div className='navigation-links'>
                <Link to='/longview-cattle/'>Home</Link>
                <Link to='/longview-cattle/bulls'>Bulls</Link>
                <Link to='/longview-cattle/cows'>Cows</Link>
                <Link to='/longview-cattle/about'>About</Link>
                <Link to='/longview-cattle/contact'>Contact</Link>
            </div>
        </div>
    )
};
