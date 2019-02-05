import React from 'react';
import Outside from '../../hoc/Outside';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

const layout = (props) => (
    <Outside>
        <Toolbar />
        <SideDrawer />
        <div>Backdrop</div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Outside>
);


export default layout;

