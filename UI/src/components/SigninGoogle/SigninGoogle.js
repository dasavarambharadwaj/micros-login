import React from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
// import './login-google.css'; // Assuming you have some CSS for styling

const clientId = 'YOUR_GOOGLE_CLIENT_ID';

const SigninGoogle = () => {
    const clientId = 'YOUR_GOOGLE_CLIENT_ID';
    const onSuccess = (response) => {
        console.log('Login Success: currentUser:', response.profileObj);
    };

    const onFailure = (response) => {
        console.log('Login failed: res:', response);
    };

    return (
        <GoogleOAuthProvider clientId={clientId}>
            <div className="login-google">
                {/* <img src="path_to_your_logo.png" alt="Logo" className="logo" /> */}
                <GoogleLogin
                    onSuccess={onSuccess}
                    onError={onFailure}
                    useOneTap
                />
            </div>
        </GoogleOAuthProvider>
    );
};

export default SigninGoogle;