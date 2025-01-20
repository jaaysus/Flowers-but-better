import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Authentication = () => {
    const [isLogin, setIsLogin] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handleProceed = () => {
        navigate('/acceuil');
    };

    const handleLogin = () => {
        if (username === 'admin' && password === 'admin123') {
            navigate('/admin');
        } else {
            alert('Invalid credentials');
        }
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h2>{isLogin ? 'Login' : 'Subscription'}</h2>
            <div style={{ margin: '20px auto', width: '300px', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
                <div>
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        style={{ display: 'block', margin: '10px auto', width: '90%', padding: '10px' }}
                    />
                </div>
                {isLogin ? (
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={{ display: 'block', margin: '10px auto', width: '90%', padding: '10px' }}
                    />
                ) : (
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={{ display: 'block', margin: '10px auto', width: '90%', padding: '10px' }}
                    />
                )}
                <button onClick={isLogin ? handleLogin : handleProceed} style={{ margin: '10px', padding: '10px 20px' }}>
                    {isLogin ? 'Login' : 'Proceed'}
                </button>
                <button onClick={() => setIsLogin(!isLogin)} style={{ margin: '10px', padding: '10px 20px' }}>
                    {isLogin ? 'Switch to Subscription' : 'Switch to Login'}
                </button>
            </div>
        </div>
    );
};

export default Authentication;
