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
        else{
            navigate('/auth');
        }
    }, [currentUser, navigate]);

};

export default Accueil;
