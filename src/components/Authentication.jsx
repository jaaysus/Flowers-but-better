import { useDispatch, useSelector} from 'react-redux';
import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { handleLogin } from '../redux/actions';
import '../styles/login.css';


const Authentication = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const loginError = useSelector((state) => state.loginError);
    const currentUser = useSelector((state) => state.currentUser);
    const navigate = useNavigate();

    const handleSubmit = () => {
        if (!username || !password) {
            alert("Please enter both username and password.");
            return;
        }

        dispatch(handleLogin(username, password));
    };

    useEffect(() => {
        if (currentUser) {
            if (currentUser.isAdmin) {
                navigate('/admin');
            } else {
                navigate('/userHome');
            }
        }
    }, [currentUser]);

    const handleCreateAccount = () => {
        navigate('/create-account');  
    };

    return (
        <div className='container' style={{ textAlign: 'center', marginTop: '100px' }}>
            <h2>Login</h2>
            <div className='login' style={{ margin: '20px auto', width: '300px', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
            <div>
                <input
                    type="text"
                    placeholder="Username or E-mail"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    style={{ display: 'block', margin: '10px auto', width: '90%', padding: '10px' }}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={{ display: 'block', margin: '10px auto', width: '90%', padding: '10px' }}
                />
                <button onClick={handleSubmit}>Login</button>
                {loginError && <p style={{ color: 'red' }}>{loginError}</p>}
            </div>
            <p>
                    Don't have an account? <a className='createAccLink' onClick={handleCreateAccount}>Create Account</a>
                </p>
        </div>
    </div>
    );
};


export default Authentication;
