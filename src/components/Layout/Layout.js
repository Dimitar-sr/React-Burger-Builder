import React from 'react';
import Outside from '../../hoc/Outside';

const layout = (props) => (
    <Outside>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main>
            {props.children}
        </main>  
    </Outside>
); 


export default layout;

