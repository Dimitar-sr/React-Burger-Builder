import React from 'react';
import LogoImg from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.css';

const sideDrawer = (props) => {
    // ... 
    return (
        <div className={classes.SideDrawer}>
            <LogoImg height="11%" />
            <nav>
                <NavigationItems />
            </nav>
        </div>
    );
}

export default sideDrawer;