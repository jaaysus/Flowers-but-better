import '../styles/acc.css';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const UserCommands = () => {
    const navigate = useNavigate(); 
    const currentUser = useSelector((state) => state.users.currentUser); 
    const orderInfo = useSelector((state) => state.panier.orderInfo);
    console.log(orderInfo);

    useEffect(() => {
            if (currentUser) {
                if (currentUser.isAdmin) {
                    navigate('/admin/commands');
                } else {
                    navigate('/acc');
                }
            } else {
                navigate('/userHome');
            }
        }, [currentUser, navigate]);

    return (
        <>
    <h1 style={{ textAlign: 'center', marginTop: '50px' }}>Clients Orders</h1>
</>
);
};

export default UserCommands;
