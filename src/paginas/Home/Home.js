import React from 'react';
import HeaderPage from '../../componentes/HeaderPage/HeaderPage';

const home = (props) => {
    return(
        <div>
            <HeaderPage navActive={props.path} />
            <h1>Home</h1>
        </div>
    );
}

export default home;