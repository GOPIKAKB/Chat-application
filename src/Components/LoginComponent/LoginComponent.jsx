import React, { useContext, useState } from 'react';
import { newContext } from '../../App';
import './LoginComponent.css'

function LoginComponent() {
    const [username, setUsername] = useState('');

    const {setIsLoggedIn, setCurrentUser} = useContext(newContext)

    const handleLogin = () => {
        setCurrentUser(username);
        setIsLoggedIn(true)
    };
    return (
        <div className="login-container">
            <h2>Login</h2>
            <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
            />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}

export default LoginComponent;
