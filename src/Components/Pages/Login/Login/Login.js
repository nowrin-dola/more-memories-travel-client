import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../Hooks/useAuth';

const Login = () => {
    const { signInWithGoogle, user } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }

    return (
        <div className="m-5">
            <h4>Please Log In</h4>
            <button className="bg-primary text-white p-2 fw-bold" onClick={handleGoogleLogin}>Google Sign In</button>
            
        </div>
    );
};

export default Login;