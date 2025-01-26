import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const AdminHome = () => {
    const currentUser = useSelector((state) => state.users.currentUser);
    const navigate = useNavigate();

    useEffect(() => {
        if (currentUser) {
            if (!currentUser.isAdmin) {
                navigate('/userHome');
            }
        } else {
            navigate('/userHome'); 
        }
    }, [currentUser, navigate]);

    if (currentUser && currentUser.isAdmin) {
        return <h1 style={{ textAlign: 'center', marginTop: '50px' }}>Welcome Admin</h1>;
    }

    return null; 
};

export default AdminHome;


