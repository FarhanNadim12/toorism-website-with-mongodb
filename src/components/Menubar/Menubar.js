import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


import './Menubar.css';
const Menubar = () => {
    const { user, logOut } = useAuth();
    const { displayName, email } = user;

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">

                            <Link className="nav-link active" to='/home' >Home</Link>
                        </li>

                        <li className="nav-item">
                            <span className="nav-link active">{displayName}</span>
                        </li>
                        {
                            email ? <button onClick={logOut}>Log Out</button> : <li className="nav-item">
                                <Link className="nav-link active" to='/login' >Log in</Link>
                            </li >
                        }
                        <li>
                            {
                                email && <Link className="nav-link active" to='/myOrder' >My Orders</Link>
                            }
                        </li>
                        <li>
                            {
                                email && <Link className="nav-link active" to='/manageOrder'>Manage Orders</Link>
                            }
                        </li>




                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Menubar;