import React from 'react';
import { Link } from 'react-router-dom'; 
import './header.styles.scss';

const Header = () => (
    <div className='header'>

        <Link to='/shop'>SHOP</Link>
    </div>
)

export default Header;