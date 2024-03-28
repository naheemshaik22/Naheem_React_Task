import React, { useState } from 'react';
import { FormInput } from './FormInput';
import logo from '../../assets/done_outline-black.svg';
import todo from '../../assets/to.png';

import './styles.css';
import { todoApiFactory } from '../../services/todoApi';
import { useHistory } from 'react-router-dom';

export const Login: React.FC = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showInvalidLoginPopup, setShowInvalidLoginPopup] = useState(false); // State for invalid login popup
    const [showPasswordMismatchPopup, setShowPasswordMismatchPopup] = useState(false);

    const history = useHistory();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (isLogin) handleLogin();
        else handleSignUp();
    };

    const handleLogin = async () => {
        const { authenticate } = todoApiFactory();
        const response = await authenticate(username, password);
        if (response.status === 'success' && response.data) {
            const { token } = response.data;
            window.sessionStorage.setItem('token', token);
            history.push('/todo');
        }
        else {
            setShowInvalidLoginPopup(true); // Show invalid login popup
        }
    };

    const handleSignUp = async () => {
        if (password !== confirmPassword) {
            setShowPasswordMismatchPopup(true); // Show password mismatch popup
            return;
        }
        const { signUp } = todoApiFactory();
        const response = await signUp(username, password, confirmPassword);
        if (response.status === 'success') {
            await handleLogin();
        }
        else {
            setShowInvalidLoginPopup(true); // Show invalid login popup
        }
    };

    return (
        <div className="login-page">
            <div className="login-container">
                <header className="title-container">
                    <img src={logo} alt="logo" /> <strong>Todo List</strong>
                </header>
                <form className="login-form" onSubmit={handleSubmit}>
                    <FormInput
                        id="username"
                        label="Username"
                        type="text"
                        onValueChange={setUsername}
                    />
                    <FormInput
                        id="password"
                        label="Password"
                        type="password"
                        onValueChange={setPassword}
                    />
                    {!isLogin && (
                        <FormInput
                            id="confirmPassword"
                            label="Confirm password"
                            type="password"
                            onValueChange={setConfirmPassword}
                        />
                    )}
                    <button className="submit-button" type="submit">
                        {isLogin ? 'LogIn' : 'Sign Up'}
                    </button>
                </form>
                <p
                    className="switch-login-sign-text"
                    onClick={() => setIsLogin(!isLogin)}
                >
                    {isLogin
                        ? 'New here? Create an account'
                        : 'Already have an account?'}
                </p>
            </div>
             {/* Popup for invalid login */}
             {isLogin && showInvalidLoginPopup && (
                <div className="popup">
                    <div className="popup-content">
                        <span className="close" onClick={() => setShowInvalidLoginPopup(false)}>&times;</span>
                        <p className="txtclr">Invalid username or password.</p>
                    </div>
                </div>
            )}
            {showPasswordMismatchPopup && (
    <div className="popup">
        <div className="popup-content">
            <span className="close" onClick={() => setShowPasswordMismatchPopup(false)}>&times;</span>
            <p className="txtclr">Passwords do NOT match!</p>
        </div>
    </div>
)}

        </div>
    );
};
