import React from 'react';
import logoImg from '../../assets/images/logo.svg';
import classes from './Logo.css';

const logo = (props) => {
    return (
        <div className={classes.Logo}>
            <img src={logoImg} alt="logo" />
        </div>
    );
}

export default logo;