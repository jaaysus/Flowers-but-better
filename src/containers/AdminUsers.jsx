import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

   
const UserManagement = () => {
    const navigate = useNavigate(); 
    const dispatch = useDispatch();

    const currentUser = useSelector((state) => state.users.currentUser); 

    const users = useSelector((state) => state.users.utilisateurs); 


    useEffect(() => {
            if (currentUser) {
                if (currentUser.isAdmin) {
                    navigate('/admin/users');
                } else {
                    navigate('/userHome');
                }
            } else {
                navigate('/userHome');
            }
        }, [currentUser, navigate]);


    const handleRemoveUser = (userId) => {
        dispatch({ type: 'REMOVE_USER', payload: userId }); 
    };
    
    return (
        <>
            <h1 style={{ textAlign: 'center', marginTop: '50px' }}>User Management</h1>
            <div>
                {users
                    .filter((user) => !user.isAdmin) // Exclude admin users
                    .map((user, index) => (
                        <div key={index} style={{ textAlign: 'center' }}>
                            <h3>{user.username}</h3>
                            <p style={{color:"black"}}>{user.email}</p>
                            <button onClick={() => handleRemoveUser(user.id)}>Remove User</button>
                        </div>
                    ))}
            </div>
        </>
    );
    
};

export default UserManagement;
