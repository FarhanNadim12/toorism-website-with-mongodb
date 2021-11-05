import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';



import Menubar from '../Menubar/Menubar';



const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';
    const handleGoogleLogIn = () => [
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri)

            })
    ]

    return (
        <div>
            <Menubar></Menubar>
            <h1>Please Log In With</h1><br />
            <button onClick={handleGoogleLogIn}>Google</button>
        </div>
    );
};

export default Login;