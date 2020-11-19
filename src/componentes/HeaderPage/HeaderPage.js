import React from 'react';
import { Link } from 'react-router-dom';
import { Handbag, Smartwatch } from 'react-bootstrap-icons';
import logo from '../../assets/logo_get-pizza.png';
import classes from './HeaderPage.module.css';

const headerPage = (props) => {
    return(
        <header>
            {/* https://getbootstrap.com/docs/4.5/components/navbar/ */}
            <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
                <Link to='/' className='navbar-brand'><img className={classes.Logo} src={logo} /></Link>
                
                <div className='collapse navbar-collapse' id='navbarNav'>
                    <ul className='navbar-nav'>
                        <li className={ props.navActive == '/cardapio' ? 'nav-item active' : 'nav-item' }>
                            <Link className='nav-link' to='/cardapio'>Produtos</Link>
                        </li>
                        <li className={ props.navActive == '/nossaCozinha' ? 'nav-item active' : 'nav-item' }>
                            <Link className='nav-link' to='/nossaCozinha'>Nossa cozinha</Link>
                        </li>
                        <li className={ props.navActive == '/faq' ? 'nav-item active' : 'nav-item' }>
                            <Link className='nav-link' to='/faq'>FAQ</Link>
                        </li>
                        <li className={ props.navActive == '/login' ? 'nav-item active' : 'nav-item' }>
                            <Link className='nav-link' to='/login'>Login</Link>
                        </li>
                        <li className={ props.navActive == '/cadastroCliente' ? 'nav-item active' : 'nav-item' }>
                            <Link className='nav-link' to='/cadastroCliente'>Cadastre-se</Link>
                        </li>
                    </ul>
                </div>
                <div className={classes.Notifications}>
                    <Smartwatch color='rgba(255,255,255,.5)' size='20' />
                    <div>
                        <Handbag color='rgba(255,255,255,.5)' size='20' />
                        <span className={"badge badge-pill badge-danger " + classes.Counter}>1</span>
                    </div>
                </div>
                <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
                    <span className='navbar-toggler-icon'></span>
                </button>
            </nav>
        </header>
    );
}

export default headerPage;