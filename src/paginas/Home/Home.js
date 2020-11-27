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
                            {context.products.map((p) => {
                                return <p key={p.id}>{p.name}</p>
                            })}
                        </div>
                    );
                }}
            </ClientContext.Consumer>
        </div>
    );
}

export default home;