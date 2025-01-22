import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'; 
import { ajouterUtilisateur } from '../redux/actions'; 
import '../styles/login.css';



const CreateAccount = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate(); 

    const handleCreateAccount = () => {
        if (!username || !password || !email) {
            alert("Please fill out all fields.");
            return;
        }
        if (email.includes('@') && email.includes('.')) {
            const nouvelUtilisateur = { 
                username,
                email, 
                password, 
                isAdmin: false
            };
              dispatch(ajouterUtilisateur(nouvelUtilisateur));
              
              navigate('/');  


        alert("Account created successfully!");
        }

        else {
            alert("Please check your email format and set password.");
        }
    };


    const handleLogin = () => {
        navigate('/Auth');  
    };



    return (
        <div className='container' style={{ textAlign: 'center', marginTop: '50px' }}>
            <h2>Create Account</h2>
            <div className='login' style={{ margin: '20px auto', width: '300px', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
                <input
                    type="text"
                    placeholder="Username"
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
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{ display: 'block', margin: '10px auto', width: '90%', padding: '10px' }}
                />
                <button onClick={handleCreateAccount}>Create Account</button>
                <p>
                    You already have an account? <a className='createAccLink' onClick={handleLogin}>Login</a>
                </p>
            </div>
        </div>
    );
};

export default CreateAccount;
