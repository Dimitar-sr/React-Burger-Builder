import React from 'react';
import Outside from '../../hoc/Outside';
import classes from './Layout.css';

const layout = (props) => (
    <Outside>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main className={classes.Content}>
            {props.children}
        </main>  
    </Outside>
); 


export default layout;

