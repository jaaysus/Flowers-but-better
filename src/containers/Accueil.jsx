import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Accueil = () => {
    const navigate = useNavigate();
    const currentUser = useSelector((state) => state.users.currentUser);

    useEffect(() => {
        if (currentUser) {
            if (currentUser.isAdmin) {
                navigate('/Flowers-but-better/adminHome');
            } else {
                navigate('/Flowers-but-better/userHome');
            }
        }
        else{
            navigate('/Flowers-but-better/userHome');
        }
    }, [currentUser, navigate]);

};

export default Accueil;
