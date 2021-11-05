import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import './Header.css';
const Header = () => {
    return (
        <div>
            <div className='header row d-flex align-item-center '>
                <div className='content col-md-6  '>
                    <h1 className='mb-3'>Travel <span>Planner</span></h1>
                    <h4 className='mb-3'>Travel With  Us </h4>

                    <Link className='abutUs' to='/about' >About Us</Link>
                </div>
            </div>

        </div>
    );
};

export default Header;