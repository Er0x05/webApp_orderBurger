import React from 'react';

import Aux from '../../Hoc/AuxSupport';

import classes from './Layout.module.css';

const layout = (props) =>(
    <Aux>
        <div>toolbar, menudrawer, ...</div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Aux>
)

export default layout;