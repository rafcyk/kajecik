import React from 'react';
import {Link} from 'react-router-dom';

import Logo from '../images/logo.png'
const Navigation = () => {
    return (
        <nav>
            <div className="logo">
                <img src={Logo} alt="" className="logo-image"/>
            </div>

            <ul className="navigation">
                <li>
                    <Link to = '/'>Strona główna</Link>
                </li>
                <li>
                    <Link to = '/poems'>Wiersze</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;