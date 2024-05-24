import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    
    return (
      <header>
         <nav>
            <ul>
                <li Link to="/">Home</li>
                <li><Link to="/usuarios">Usuarios</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
         </nav>
      </header>
    );
};

export default Header;