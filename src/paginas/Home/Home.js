import React from 'react';
import HeaderPage from '../../componentes/HeaderPage/HeaderPage';
import ClientContext from '../../context/ClientContext';

const home = (props) => {
    return(
        <div>
            <HeaderPage navActive={props.path} />
            <ClientContext.Consumer>
                {context => {
                    return(
                        <div>
                            <h1>Home</h1>
                            {context.products.map((p, index) => {
                                return <p key={index}>{p.name}</p>
                            })}
                        </div>
                    );
                }}
            </ClientContext.Consumer>
        </div>
    );
}

export default home;