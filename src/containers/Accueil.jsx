import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Accueil = () => {
    const navigate = useNavigate();
    const currentUser = useSelector((state) => state.currentUser);

    useEffect(() => {
        if (currentUser) {
            if (currentUser.isAdmin) {
                navigate('/adminHome');
            } else {
                navigate('/userHome');
            }
        }
    }, [currentUser, navigate]);

    return <h1 style={{ textAlign: 'center', marginTop: '50px' }}>Bienvenue à l'Accueil !</h1>;
};

export default Accueil;
